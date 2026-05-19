"use client";

import { useEffect, useRef } from "react";

// Lightweight WebGL distortion of a looping background video.
// Falls back to a plain <video> when WebGL is unavailable or reduced motion is preferred.
// The shader applies subtle noise + radial vignette tied to time + pointer.
export function HeroVideoShader({
  src,
  poster,
}: {
  src: { webm?: string; mp4: string };
  poster: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const small = window.matchMedia("(max-width: 640px)").matches;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!video || !canvas || !wrap) return;

    if (reduced || small) {
      video.style.opacity = "1";
      canvas.style.display = "none";
      return;
    }

    let gl: WebGLRenderingContext | null = null;
    try {
      gl = canvas.getContext("webgl", {
        antialias: false,
        preserveDrawingBuffer: false,
      });
    } catch {
      gl = null;
    }
    if (!gl) {
      video.style.opacity = "1";
      canvas.style.display = "none";
      return;
    }

    const vsrc = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = (a_position + 1.0) * 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;
    const fsrc = `
      precision mediump float;
      varying vec2 v_uv;
      uniform sampler2D u_tex;
      uniform float u_time;
      uniform vec2 u_mouse;

      // 2D simplex-ish noise (cheap)
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){
        vec2 i=floor(p); vec2 f=fract(p);
        float a=hash(i); float b=hash(i+vec2(1,0));
        float c=hash(i+vec2(0,1)); float d=hash(i+vec2(1,1));
        vec2 u=f*f*(3.0-2.0*f);
        return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y;
      }

      void main() {
        vec2 uv = v_uv;
        float n = noise(uv * 4.0 + u_time * 0.18);
        vec2 dist = (u_mouse - uv) * 0.04;
        uv += vec2(n - 0.5, n - 0.5) * 0.012 + dist;
        vec3 col = texture2D(u_tex, uv).rgb;
        // vignette
        float v = smoothstep(1.0, 0.4, distance(v_uv, vec2(0.5)));
        col *= mix(0.55, 1.0, v);
        // teal grade pull
        col = mix(col, col * vec3(0.85, 1.05, 1.04), 0.25);
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const compile = (type: number, source: string) => {
      const s = gl!.createShader(type);
      if (!s) throw new Error("createShader failed");
      gl!.shaderSource(s, source);
      gl!.compileShader(s);
      return s;
    };
    const vs = compile(gl.VERTEX_SHADER, vsrc);
    const fs = compile(gl.FRAGMENT_SHADER, fsrc);
    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const loc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uMouse = gl.getUniformLocation(program, "u_mouse");

    let mouse = { x: 0.5, y: 0.5 };
    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      mouse.x = (e.clientX - r.left) / r.width;
      mouse.y = 1.0 - (e.clientY - r.top) / r.height;
    };
    wrap.addEventListener("mousemove", onMove);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = wrap.clientWidth * dpr;
      canvas.height = wrap.clientHeight * dpr;
      canvas.style.width = `${wrap.clientWidth}px`;
      canvas.style.height = `${wrap.clientHeight}px`;
      gl!.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    let running = true;
    const start = performance.now();
    const tick = () => {
      if (!running) return;
      if (video.readyState >= 2) {
        try {
          gl!.bindTexture(gl!.TEXTURE_2D, tex);
          gl!.texImage2D(
            gl!.TEXTURE_2D,
            0,
            gl!.RGBA,
            gl!.RGBA,
            gl!.UNSIGNED_BYTE,
            video,
          );
        } catch {
          // texture upload can throw briefly during readyState transitions
        }
      }
      gl!.uniform1f(uTime, (performance.now() - start) / 1000);
      gl!.uniform2f(uMouse, mouse.x, mouse.y);
      gl!.drawArrays(gl!.TRIANGLES, 0, 6);
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver((entries) => {
      running = entries[0]?.isIntersecting ?? false;
      if (running) {
        video.play().catch(() => {});
        requestAnimationFrame(tick);
      } else {
        video.pause();
      }
    });
    io.observe(wrap);

    video.play().catch(() => {});
    requestAnimationFrame(tick);

    return () => {
      running = false;
      io.disconnect();
      window.removeEventListener("resize", resize);
      wrap.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0 -z-10 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        className="absolute inset-0 h-full w-full object-cover opacity-0"
      >
        {src.webm && <source src={src.webm} type="video/webm" />}
        <source src={src.mp4} type="video/mp4" />
      </video>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/50 via-bg/30 to-bg" />
    </div>
  );
}
