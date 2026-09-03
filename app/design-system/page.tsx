"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Textarea,
  ButtonProps,
  BadgeProps,
} from "@/components/ui";
import {
  Heart,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Search,
  Mail,
  Copy,
  Check,
  Layers,
  Palette,
  Type,
  Sliders,
  ExternalLink,
  Code2,
  Users,
  Compass,
  Building2,
  Maximize2,
} from "lucide-react";


export default function DesignSystemPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Playground state for Button
  const [btnVariant, setBtnVariant] =
    useState<NonNullable<ButtonProps["variant"]>>("primary");
  const [btnSize, setBtnSize] =
    useState<NonNullable<ButtonProps["size"]>>("md");
  const [btnLoading, setBtnLoading] = useState<boolean>(false);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(false);
  const [btnIcon, setBtnIcon] = useState<"none" | "left" | "right">("right");
  const [btnText, setBtnText] = useState<string>("Donasi Sekarang");

  // Playground state for Badge
  const [badgeVariant, setBadgeVariant] =
    useState<NonNullable<BadgeProps["variant"]>>("primary");
  const [badgeSize, setBadgeSize] =
    useState<NonNullable<BadgeProps["size"]>>("md");
  const [badgeDot, setBadgeDot] = useState<boolean>(true);
  const [badgeText, setBadgeText] = useState<string>("Program Aktif");

  // Copy helper
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const navItems = [
    { id: "playground", label: "Playground", icon: Sliders },
    { id: "brand-tokens", label: "Color Tokens", icon: Palette },
    { id: "typography", label: "Typography", icon: Type },
    { id: "buttons", label: "Buttons", icon: Layers },
    { id: "badges", label: "Badges", icon: Sparkles },
    { id: "cards", label: "Cards", icon: Layers },
    { id: "containers", label: "Containers", icon: Maximize2 },
    { id: "forms", label: "Form Controls", icon: Code2 },
  ];

  return (
    <div className="min-h-screen bg-[#FAFCFE] text-[#555555] font-['Lato',sans-serif]">
      {/* Top Banner Bar */}
      <div className="bg-[#EAF5FB] border-b border-[#3C95C8]/20 px-4 py-2 text-center text-xs font-semibold text-[#3C95C8]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <Sparkles className="w-4 h-4 text-[#3C95C8]" />
            <span>Yayasan Jalan Langit — Core UI System & Brand Guidelines 2026</span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[11px] bg-white px-2 py-0.5 rounded border border-[#3C95C8]/30">
            v1.0.0 Stable
          </span>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6EB6D6] to-[#3C95C8] flex items-center justify-center text-white shadow-sm font-['Poppins'] font-extrabold text-sm">
                JL
              </div>
              <div className="flex flex-col">
                <span className="font-['Poppins'] font-bold text-base text-[#2C2C2C] leading-none">
                  Jalan Langit
                </span>
                <span className="text-[11px] font-semibold text-[#3C95C8] font-['Poppins'] leading-tight mt-0.5">
                  Design System
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="text-xs sm:text-sm font-semibold text-[#555555] hover:text-[#3C95C8] transition-colors"
              >
                Halaman Utama
              </Link>
              <Button
                size="sm"
                variant="outline"
                href="https://github.com/Jalan-Langit-Foundation/company-web/issues/1"
                external
                rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
              >
                Issue #1
              </Button>
            </div>
          </div>

          {/* Nav Pills Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 border-t border-slate-100 no-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold font-['Poppins'] text-[#555555] hover:text-[#3C95C8] hover:bg-[#EAF5FB] transition-all flex items-center gap-1.5"
                >
                  <Icon className="w-3.5 h-3.5 text-[#3C95C8]" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#3C95C8] via-[#4fa3d1] to-[#6EB6D6] p-8 sm:p-12 text-white shadow-lg">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white border border-white/30">
              <Sparkles className="w-3.5 h-3.5" />
              Living Component Library
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-['Poppins'] text-white tracking-tight leading-tight">
              Design System & Core UI Components
            </h1>
            <p className="text-sm sm:text-base text-white/95 leading-relaxed font-['Lato']">
              Fondasi komponen UI, standar warna resmi, tipografi, dan varian yang dibuat khusus sesuai panduan identitas visual Yayasan Jalan Langit 2026.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="white"
                size="md"
                href="#playground"
                rightIcon={<ArrowRight className="w-4 h-4 text-[#3C95C8]" />}
              >
                Coba Live Playground
              </Button>
              <Button
                variant="outline"
                size="md"
                href="#brand-tokens"
                className="text-white border-white hover:bg-white/15"
              >
                Lihat Color Tokens
              </Button>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-15 pointer-events-none hidden md:flex items-center justify-center">
            <Layers className="w-80 h-80 text-white" />
          </div>
        </section>

        {/* 1. PLAYGROUND SECTION */}
        <section id="playground" className="scroll-mt-36 space-y-6">
          <div className="space-y-1">
            <span className="brand-section-label">Interactive Playground</span>
            <h2 className="text-2xl font-bold font-['Poppins'] text-[#2C2C2C]">
              Live Component Customizer
            </h2>
            <p className="text-sm text-[#555555]">
              Ubah properti di bawah secara instan untuk melihat variasi, state, dan menyalin kode React yang dihasilkan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Button Playground */}
            <Card variant="default" className="border-slate-200">
              <CardHeader className="bg-slate-50/80 border-b border-slate-100 py-3.5 px-5">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-bold text-[#2C2C2C]">
                    Button Component Playground
                  </CardTitle>
                  <Badge variant="primary" size="sm">
                    &lt;Button /&gt;
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-5">
                {/* Live Preview Box */}
                <div className="p-8 rounded-2xl bg-[#F4F9FD] border border-[#3C95C8]/20 flex flex-col items-center justify-center min-h-[140px] gap-3">
                  <span className="text-[11px] font-semibold text-[#555555]/70 uppercase tracking-wider">
                    Output Preview
                  </span>
                  <Button
                    variant={btnVariant}
                    size={btnSize}
                    isLoading={btnLoading}
                    disabled={btnDisabled}
                    leftIcon={
                      btnIcon === "left" ? (
                        <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                      ) : undefined
                    }
                    rightIcon={
                      btnIcon === "right" ? (
                        <ArrowRight className="w-4 h-4" />
                      ) : undefined
                    }
                  >
                    {btnText}
                  </Button>
                </div>

                {/* Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#2C2C2C] block mb-1.5 font-['Poppins']">
                      Variant
                    </label>
                    <select
                      value={btnVariant}
                      onChange={(e) =>
                        setBtnVariant(e.target.value as NonNullable<ButtonProps["variant"]>)
                      }
                      className="w-full text-xs font-medium rounded-lg border border-slate-300 bg-white p-2 text-[#2C2C2C] focus:border-[#3C95C8] focus:outline-none"
                    >
                      <option value="primary">primary (#3C95C8)</option>
                      <option value="secondary">secondary (#6EB6D6)</option>
                      <option value="outline">outline (Outline Blue)</option>
                      <option value="ghost">ghost (Ghost Gray)</option>
                      <option value="gradient">gradient (Sky to Primary)</option>
                      <option value="destructive">destructive (Red)</option>
                      <option value="dark">dark (Charcoal)</option>
                      <option value="white">white (Contrast)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#2C2C2C] block mb-1.5 font-['Poppins']">
                      Size
                    </label>
                    <div className="flex gap-1.5">
                      {(["sm", "md", "lg", "icon"] as const).map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setBtnSize(s)}
                          className={`flex-1 py-1.5 text-xs font-bold rounded-lg uppercase transition-all ${
                            btnSize === s
                              ? "bg-[#3C95C8] text-white shadow-xs"
                              : "bg-slate-100 text-[#555555] hover:bg-slate-200"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#2C2C2C] block mb-1.5 font-['Poppins']">
                      Button Label
                    </label>
                    <input
                      type="text"
                      value={btnText}
                      onChange={(e) => setBtnText(e.target.value)}
                      className="w-full text-xs rounded-lg border border-slate-300 bg-white p-2 text-[#2C2C2C] focus:border-[#3C95C8] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#2C2C2C] block mb-1.5 font-['Poppins']">
                      Icon Placement
                    </label>
                    <div className="flex gap-1.5">
                      {(["none", "left", "right"] as const).map((pos) => (
                        <button
                          key={pos}
                          type="button"
                          onClick={() => setBtnIcon(pos)}
                          className={`flex-1 py-1.5 text-xs font-bold rounded-lg capitalize transition-all ${
                            btnIcon === pos
                              ? "bg-[#3C95C8] text-white shadow-xs"
                              : "bg-slate-100 text-[#555555] hover:bg-slate-200"
                          }`}
                        >
                          {pos}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="sm:col-span-2 flex items-center gap-6 pt-1">
                    <label className="inline-flex items-center gap-2 text-xs font-semibold text-[#2C2C2C] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={btnLoading}
                        onChange={(e) => setBtnLoading(e.target.checked)}
                        className="rounded border-slate-300 text-[#3C95C8] focus:ring-[#3C95C8]"
                      />
                      <span>isLoading (Spinner)</span>
                    </label>

                    <label className="inline-flex items-center gap-2 text-xs font-semibold text-[#2C2C2C] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={btnDisabled}
                        onChange={(e) => setBtnDisabled(e.target.checked)}
                        className="rounded border-slate-300 text-[#3C95C8] focus:ring-[#3C95C8]"
                      />
                      <span>disabled</span>
                    </label>
                  </div>
                </div>

                {/* JSX Snippet */}
                <div className="rounded-xl bg-slate-900 text-slate-100 p-4 text-xs font-mono">
                  <div className="flex justify-between items-center mb-2 text-[11px] text-slate-400">
                    <span>JSX Code</span>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          `<Button variant="${btnVariant}" size="${btnSize}"${
                            btnLoading ? " isLoading" : ""
                          }${btnDisabled ? " disabled" : ""}>${btnText}</Button>`,
                          "btn-code"
                        )
                      }
                      className="hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      {copiedCode === "btn-code" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>{copiedCode === "btn-code" ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <pre className="text-[11px] leading-relaxed overflow-x-auto text-emerald-300">
                    {`<Button\n  variant="${btnVariant}"\n  size="${btnSize}"${
                      btnLoading ? "\n  isLoading" : ""
                    }${btnDisabled ? "\n  disabled" : ""}${
                      btnIcon === "left" ? '\n  leftIcon={<Heart className="w-4 h-4" />}' : ""
                    }${
                      btnIcon === "right" ? '\n  rightIcon={<ArrowRight className="w-4 h-4" />}' : ""
                    }\n>\n  ${btnText}\n</Button>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Badge Playground */}
            <Card variant="default" className="border-slate-200">
              <CardHeader className="bg-slate-50/80 border-b border-slate-100 py-3.5 px-5">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-bold text-[#2C2C2C]">
                    Badge Component Playground
                  </CardTitle>
                  <Badge variant="brand" size="sm">
                    &lt;Badge /&gt;
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-5">
                {/* Live Preview Box */}
                <div className="p-8 rounded-2xl bg-[#F4F9FD] border border-[#3C95C8]/20 flex flex-col items-center justify-center min-h-[140px] gap-3">
                  <span className="text-[11px] font-semibold text-[#555555]/70 uppercase tracking-wider">
                    Output Preview
                  </span>
                  <Badge
                    variant={badgeVariant}
                    size={badgeSize}
                    dot={badgeDot}
                  >
                    {badgeText}
                  </Badge>
                </div>

                {/* Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#2C2C2C] block mb-1.5 font-['Poppins']">
                      Variant
                    </label>
                    <select
                      value={badgeVariant}
                      onChange={(e) =>
                        setBadgeVariant(
                          e.target.value as NonNullable<BadgeProps["variant"]>
                        )
                      }
                      className="w-full text-xs font-medium rounded-lg border border-slate-300 bg-white p-2 text-[#2C2C2C] focus:border-[#3C95C8] focus:outline-none"
                    >
                      <option value="primary">primary (Soft Blue)</option>
                      <option value="secondary">secondary (Sky Blue Soft)</option>
                      <option value="brand">brand (Solid Brand Blue)</option>
                      <option value="outline">outline (Outline)</option>
                      <option value="success">success (Emerald)</option>
                      <option value="warning">warning (Amber)</option>
                      <option value="destructive">destructive (Rose)</option>
                      <option value="neutral">neutral (Zinc)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#2C2C2C] block mb-1.5 font-['Poppins']">
                      Size
                    </label>
                    <div className="flex gap-1.5">
                      {(["sm", "md", "lg"] as const).map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setBadgeSize(s)}
                          className={`flex-1 py-1.5 text-xs font-bold rounded-lg uppercase transition-all ${
                            badgeSize === s
                              ? "bg-[#3C95C8] text-white shadow-xs"
                              : "bg-slate-100 text-[#555555] hover:bg-slate-200"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#2C2C2C] block mb-1.5 font-['Poppins']">
                      Badge Text
                    </label>
                    <input
                      type="text"
                      value={badgeText}
                      onChange={(e) => setBadgeText(e.target.value)}
                      className="w-full text-xs rounded-lg border border-slate-300 bg-white p-2 text-[#2C2C2C] focus:border-[#3C95C8] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#2C2C2C] block mb-1.5 font-['Poppins']">
                      Indicator Dot
                    </label>
                    <label className="inline-flex items-center gap-2 text-xs font-semibold text-[#2C2C2C] cursor-pointer h-9">
                      <input
                        type="checkbox"
                        checked={badgeDot}
                        onChange={(e) => setBadgeDot(e.target.checked)}
                        className="rounded border-slate-300 text-[#3C95C8] focus:ring-[#3C95C8]"
                      />
                      <span>Pulsing Dot Indicator</span>
                    </label>
                  </div>
                </div>

                {/* JSX Snippet */}
                <div className="rounded-xl bg-slate-900 text-slate-100 p-4 text-xs font-mono">
                  <div className="flex justify-between items-center mb-2 text-[11px] text-slate-400">
                    <span>JSX Code</span>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          `<Badge variant="${badgeVariant}" size="${badgeSize}"${
                            badgeDot ? " dot" : ""
                          }>${badgeText}</Badge>`,
                          "badge-code"
                        )
                      }
                      className="hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      {copiedCode === "badge-code" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>{copiedCode === "badge-code" ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <pre className="text-[11px] leading-relaxed overflow-x-auto text-emerald-300">
                    {`<Badge\n  variant="${badgeVariant}"\n  size="${badgeSize}"${
                      badgeDot ? "\n  dot" : ""
                    }\n>\n  ${badgeText}\n</Badge>`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 2. BRAND COLOR TOKENS */}
        <section id="brand-tokens" className="scroll-mt-36 space-y-6">
          <div className="space-y-1">
            <span className="brand-section-label">Visual Identity</span>
            <h2 className="text-2xl font-bold font-['Poppins'] text-[#2C2C2C]">
              Brand Color Palette & Tokens
            </h2>
            <p className="text-sm text-[#555555]">
              Sesuai Brand Guidelines 2026: Maksimal 3 warna per desain untuk menjaga estetika bersih & konsisten.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Primary Blue */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="h-20 rounded-xl bg-[#3C95C8] shadow-inner flex items-end p-2 justify-end">
                <button
                  type="button"
                  onClick={() => handleCopy("#3C95C8", "col-primary")}
                  className="bg-white/90 hover:bg-white text-[#3C95C8] p-1.5 rounded-lg text-xs font-mono shadow-xs flex items-center gap-1 cursor-pointer"
                  title="Copy Hex"
                >
                  {copiedCode === "col-primary" ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
              <div>
                <h4 className="text-xs font-bold font-['Poppins'] text-[#2C2C2C]">Primary Blue</h4>
                <p className="text-xs font-mono font-semibold text-[#3C95C8]">#3C95C8</p>
                <p className="text-[11px] text-[#555555] mt-1">Kepercayaan, profesionalisme, CTA utama</p>
              </div>
            </div>

            {/* Sky Blue */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="h-20 rounded-xl bg-[#6EB6D6] shadow-inner flex items-end p-2 justify-end">
                <button
                  type="button"
                  onClick={() => handleCopy("#6EB6D6", "col-sky")}
                  className="bg-white/90 hover:bg-white text-[#3C95C8] p-1.5 rounded-lg text-xs font-mono shadow-xs flex items-center gap-1 cursor-pointer"
                  title="Copy Hex"
                >
                  {copiedCode === "col-sky" ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
              <div>
                <h4 className="text-xs font-bold font-['Poppins'] text-[#2C2C2C]">Sky Blue</h4>
                <p className="text-xs font-mono font-semibold text-[#6EB6D6]">#6EB6D6</p>
                <p className="text-[11px] text-[#555555] mt-1">Harapan, optimisme, aksen visual</p>
              </div>
            </div>

            {/* Dark Gray */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="h-20 rounded-xl bg-[#555555] shadow-inner flex items-end p-2 justify-end">
                <button
                  type="button"
                  onClick={() => handleCopy("#555555", "col-gray")}
                  className="bg-white/90 hover:bg-white text-[#555555] p-1.5 rounded-lg text-xs font-mono shadow-xs flex items-center gap-1 cursor-pointer"
                  title="Copy Hex"
                >
                  {copiedCode === "col-gray" ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
              <div>
                <h4 className="text-xs font-bold font-['Poppins'] text-[#2C2C2C]">Dark Gray</h4>
                <p className="text-xs font-mono font-semibold text-[#555555]">#555555</p>
                <p className="text-[11px] text-[#555555] mt-1">Body text, deskripsi, subjudul</p>
              </div>
            </div>

            {/* Charcoal Black */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="h-20 rounded-xl bg-[#2C2C2C] shadow-inner flex items-end p-2 justify-end">
                <button
                  type="button"
                  onClick={() => handleCopy("#2C2C2C", "col-black")}
                  className="bg-white/90 hover:bg-white text-[#2C2C2C] p-1.5 rounded-lg text-xs font-mono shadow-xs flex items-center gap-1 cursor-pointer"
                  title="Copy Hex"
                >
                  {copiedCode === "col-black" ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
              <div>
                <h4 className="text-xs font-bold font-['Poppins'] text-[#2C2C2C]">Charcoal Black</h4>
                <p className="text-xs font-mono font-semibold text-[#2C2C2C]">#2C2C2C</p>
                <p className="text-[11px] text-[#555555] mt-1">Judul kontras, teks tegas</p>
              </div>
            </div>

            {/* Soft Blue Tint */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="h-20 rounded-xl bg-[#EAF5FB] border border-[#3C95C8]/20 flex items-end p-2 justify-end">
                <button
                  type="button"
                  onClick={() => handleCopy("#EAF5FB", "col-soft")}
                  className="bg-white text-[#3C95C8] p-1.5 rounded-lg text-xs font-mono shadow-xs flex items-center gap-1 cursor-pointer"
                  title="Copy Hex"
                >
                  {copiedCode === "col-soft" ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
              <div>
                <h4 className="text-xs font-bold font-['Poppins'] text-[#2C2C2C]">Soft Blue</h4>
                <p className="text-xs font-mono font-semibold text-[#3C95C8]">#EAF5FB</p>
                <p className="text-[11px] text-[#555555] mt-1">Background kartu & badge tint</p>
              </div>
            </div>

            {/* Brand Gradient */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="h-20 rounded-xl bg-gradient-to-b from-[#6EB6D6] to-[#3C95C8] shadow-inner flex items-end p-2 justify-end">
                <button
                  type="button"
                  onClick={() =>
                    handleCopy(
                      "linear-gradient(180deg, #6EB6D6 0%, #3C95C8 100%)",
                      "col-gradient"
                    )
                  }
                  className="bg-white/90 hover:bg-white text-[#3C95C8] p-1.5 rounded-lg text-xs font-mono shadow-xs flex items-center gap-1 cursor-pointer"
                  title="Copy Gradient"
                >
                  {copiedCode === "col-gradient" ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
              <div>
                <h4 className="text-xs font-bold font-['Poppins'] text-[#2C2C2C]">Brand Gradient</h4>
                <p className="text-xs font-mono font-semibold text-[#3C95C8]">Sky to Primary</p>
                <p className="text-[11px] text-[#555555] mt-1">Cover card & CTA block</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TYPOGRAPHY SCALE */}
        <section id="typography" className="scroll-mt-36 space-y-6">
          <div className="space-y-1">
            <span className="brand-section-label">Typography System</span>
            <h2 className="text-2xl font-bold font-['Poppins'] text-[#2C2C2C]">
              Poppins (Heading & CTA) & Lato (Body Text)
            </h2>
            <p className="text-sm text-[#555555]">
              Aturan Brand: Maksimal 2 font dalam satu sistem antarmuka dengan fluid typography scale berbasis viewport clamp.
            </p>
          </div>

          <Card variant="default" className="border-slate-200 divide-y divide-slate-100">
            {/* H1 / 4XL */}
            <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="w-56 shrink-0 space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="primary" size="sm" className="font-mono">H1 / text-fluid-4xl</Badge>
                </div>
                <span className="text-[11px] text-slate-400 font-mono block">clamp(2.75rem, 2.10rem + 2.80vw, 4.25rem)</span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-['Poppins'] text-fluid-4xl font-extrabold text-[#3C95C8] leading-tight block break-words">
                  #BergandenganLangitkanKebaikan
                </span>
              </div>
            </div>

            {/* H2 / 3XL */}
            <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="w-56 shrink-0 space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="primary" size="sm" className="font-mono">H2 / text-fluid-3xl</Badge>
                </div>
                <span className="text-[11px] text-slate-400 font-mono block">clamp(2.25rem, 1.80rem + 2.00vw, 3.25rem)</span>
              </div>
              <div className="flex-1">
                <span className="font-['Poppins'] text-fluid-3xl font-bold text-[#2C2C2C] leading-snug block">
                  Mewujudkan Harapan Bersama Yayasan
                </span>
              </div>
            </div>

            {/* H3 / 2XL */}
            <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="w-56 shrink-0 space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="primary" size="sm" className="font-mono">H3 / text-fluid-2xl</Badge>
                </div>
                <span className="text-[11px] text-slate-400 font-mono block">clamp(1.875rem, 1.55rem + 1.40vw, 2.5rem)</span>
              </div>
              <div className="flex-1">
                <span className="font-['Poppins'] text-fluid-2xl font-semibold text-[#2C2C2C] leading-snug block">
                  Program Pendidikan & Kesejahteraan Ummat
                </span>
              </div>
            </div>

            {/* H4 / XL */}
            <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="w-56 shrink-0 space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="primary" size="sm" className="font-mono">H4 / text-fluid-xl</Badge>
                </div>
                <span className="text-[11px] text-slate-400 font-mono block">clamp(1.5rem, 1.30rem + 0.90vw, 1.875rem)</span>
              </div>
              <div className="flex-1">
                <span className="font-['Poppins'] text-fluid-xl font-semibold text-[#2C2C2C] leading-snug block">
                  Inisiatif & Aksi Nyata Berkelanjutan
                </span>
              </div>
            </div>

            {/* Body Base */}
            <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="w-56 shrink-0 space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" size="sm" className="font-mono">Body / text-fluid-base</Badge>
                </div>
                <span className="text-[11px] text-slate-400 font-mono block">clamp(1rem, 0.95rem + 0.30vw, 1.125rem)</span>
              </div>
              <div className="flex-1">
                <p className="text-fluid-base font-['Lato'] text-[#555555] leading-relaxed mb-0">
                  Yayasan Jalan Langit berkomitmen untuk menyalurkan amanah donatur secara transparan, tepat sasaran, dan berkelanjutan bagi masyarakat di seluruh pelosok negeri.
                </p>
              </div>
            </div>

            {/* Brand Title Frame */}
            <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="w-56 shrink-0 space-y-1">
                <span className="text-xs font-mono font-bold text-[#3C95C8] block">Brand Section Frame</span>
                <span className="text-[11px] text-slate-400 font-mono block">.brand-title utility</span>
              </div>
              <div className="flex-1">
                <div className="brand-title text-sm">
                  I. SIAPA KITA?
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* 4. BUTTONS GALLERY */}
        <section id="buttons" className="scroll-mt-36 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="space-y-1">
              <span className="brand-section-label">Button Component</span>
              <h2 className="text-2xl font-bold font-['Poppins'] text-[#2C2C2C]">
                Button Variants, Sizes & States
              </h2>
            </div>
            <Badge variant="primary">8 Style Variants • 4 Sizes</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Style Variants */}
            <Card variant="default" className="border-slate-200 p-6 space-y-4">
              <div className="space-y-1">
                <h4 className="text-sm font-bold font-['Poppins'] text-[#2C2C2C]">
                  All Style Variants
                </h4>
                <p className="text-xs text-[#555555]">
                  Seluruh tombol menggunakan pill radius (9999px) dengan font Poppins bold.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="gradient">Gradient</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              {/* White button on dark backdrop */}
              <div className="p-4 rounded-xl bg-slate-900 flex items-center justify-between gap-3 mt-4">
                <span className="text-xs text-slate-300 font-medium">White Variant (Contrast)</span>
                <Button variant="white" size="sm">
                  White Button
                </Button>
              </div>
            </Card>

            {/* Sizes Matrix */}
            <Card variant="default" className="border-slate-200 p-6 space-y-4">
              <div className="space-y-1">
                <h4 className="text-sm font-bold font-['Poppins'] text-[#2C2C2C]">
                  Size Scale
                </h4>
                <p className="text-xs text-[#555555]">
                  Proporsi tinggi dan padding yang konsisten untuk berbagai hierarki visual.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button size="sm">Small (sm)</Button>
                <Button size="md">Medium (md)</Button>
                <Button size="lg">Large (lg)</Button>
                <Button size="icon" variant="outline">
                  <Heart className="w-4 h-4 text-[#3C95C8]" />
                </Button>
              </div>
            </Card>

            {/* States & Icons */}
            <Card variant="default" className="border-slate-200 md:col-span-2 p-6 space-y-4">
              <div className="space-y-1">
                <h4 className="text-sm font-bold font-['Poppins'] text-[#2C2C2C]">
                  States, Icons & Link Support
                </h4>
                <p className="text-xs text-[#555555]">
                  Mendukung icon slots kiri/kanan, loading state (spinner), disabled, dan asChild/href link.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  variant="primary"
                  leftIcon={<Heart className="w-4 h-4 text-white fill-white" />}
                >
                  Donasi Sekarang
                </Button>
                <Button
                  variant="gradient"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Pelajari Program
                </Button>
                <Button variant="primary" isLoading>
                  Memproses Donasi...
                </Button>
                <Button variant="secondary" disabled>
                  Pendaftaran Ditutup
                </Button>
                <Button
                  variant="outline"
                  href="https://jalanlangit.org"
                  external
                  rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                >
                  External Link
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* 5. BADGES GALLERY */}
        <section id="badges" className="scroll-mt-36 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="space-y-1">
              <span className="brand-section-label">Badge Component</span>
              <h2 className="text-2xl font-bold font-['Poppins'] text-[#2C2C2C]">
                Status Badges & Indicators
              </h2>
            </div>
            <Badge variant="brand">8 Semantic Variants</Badge>
          </div>

          <Card variant="default" className="border-slate-200 p-6 space-y-6">
            <div className="space-y-3">
              <h4 className="text-xs font-bold font-['Poppins'] text-[#2C2C2C] uppercase tracking-wider">
                Semantic Status Badges
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="primary" dot>
                  Primary Active
                </Badge>
                <Badge variant="secondary" dot>
                  Sky Secondary
                </Badge>
                <Badge variant="brand">
                  Brand Solid
                </Badge>
                <Badge variant="outline">
                  Outline
                </Badge>
                <Badge variant="success" dot>
                  Tersalurkan 100%
                </Badge>
                <Badge variant="warning" dot>
                  Sedang Berjalan
                </Badge>
                <Badge variant="destructive" dot>
                  Darurat Bencana
                </Badge>
                <Badge variant="neutral">
                  Arsip 2025
                </Badge>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100 space-y-3">
              <h4 className="text-xs font-bold font-['Poppins'] text-[#2C2C2C] uppercase tracking-wider">
                Badges with Custom Icons & Sizes
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <Badge
                  variant="success"
                  size="sm"
                  icon={<CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                >
                  Terverifikasi
                </Badge>
                <Badge
                  variant="primary"
                  size="md"
                  icon={<ShieldCheck className="w-3.5 h-3.5 text-[#3C95C8]" />}
                >
                  Amanah & Transparan
                </Badge>
                <Badge
                  variant="brand"
                  size="lg"
                  icon={<Heart className="w-4 h-4 text-white fill-white" />}
                >
                  #LangitkanKebaikan
                </Badge>
              </div>
            </div>
          </Card>
        </section>

        {/* 6. CARDS SHOWCASE */}
        <section id="cards" className="scroll-mt-36 space-y-6">
          <div className="space-y-1">
            <span className="brand-section-label">Card Component</span>
            <h2 className="text-2xl font-bold font-['Poppins'] text-[#2C2C2C]">
              Cards & Modular Structure
            </h2>
            <p className="text-sm text-[#555555]">
              Struktur modular: CardHeader, CardTitle, CardDescription, CardContent, dan CardFooter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Standard Program Card */}
            <Card variant="interactive" className="flex flex-col justify-between h-full border border-slate-200">
              <div>
                <div className="h-40 bg-gradient-to-tr from-[#3C95C8]/15 via-[#6EB6D6]/25 to-[#EAF5FB] relative flex items-center justify-center p-6 text-center">
                  <div className="space-y-1">
                    <Building2 className="w-10 h-10 text-[#3C95C8] mx-auto opacity-75" />
                    <span className="text-xs font-semibold text-[#3C95C8]">
                      Pendidikan & Dakwah
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="success" size="sm" dot>
                      Berjalan
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-5 pb-2">
                  <CardTitle className="text-base text-[#2C2C2C]">
                    Beasiswa Santri & Yatim Berprestasi 2026
                  </CardTitle>
                  <CardDescription>
                    Bantuan biaya pendidikan dan operasional asrama santri tahfidz di pelosok.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-5 pt-2 space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-[#3C95C8]">Terkumpul</span>
                    <span className="text-[#2C2C2C]">Rp 148.500.000 (74%)</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#3C95C8] rounded-full w-3/4" />
                  </div>
                </CardContent>
              </div>
              <CardFooter className="p-5 pt-0">
                <Button variant="primary" size="sm" className="w-full" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Ikut Berdonasi
                </Button>
              </CardFooter>
            </Card>

            {/* Brand Gradient Highlight Card */}
            <Card variant="gradient" className="flex flex-col justify-between p-6 shadow-md">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold text-white border border-white/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  Gerakan Kebaikan
                </div>
                <h3 className="text-2xl font-bold font-['Poppins'] text-white leading-snug">
                  #Bergandengan Langitkan Kebaikan
                </h3>
                <p className="text-sm text-white/95 leading-relaxed">
                  Satu langkah kecil kepedulian Anda menghadirkan senyum dan masa depan cerah bagi mereka yang membutuhkan.
                </p>
              </div>
              <div className="pt-6 space-y-3">
                <div className="p-3 rounded-xl bg-white/15 backdrop-blur-xs border border-white/20 flex items-center gap-2.5">
                  <Heart className="w-4 h-4 text-rose-200 fill-rose-200 shrink-0" />
                  <span className="text-xs text-white font-medium">
                    100% donasi disalurkan ke penerima manfaat.
                  </span>
                </div>
                <Button variant="white" size="md" className="w-full" rightIcon={<ArrowRight className="w-4 h-4 text-[#3C95C8]" />}>
                  Donasi Sekarang
                </Button>
              </div>
            </Card>

            {/* Stat & Metric Cards */}
            <div className="space-y-4 flex flex-col justify-between">
              <Card variant="soft" className="p-5">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-white text-[#3C95C8] shadow-xs flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#3C95C8] uppercase tracking-wider">
                      Penerima Manfaat
                    </p>
                    <h4 className="text-2xl font-extrabold font-['Poppins'] text-[#2C2C2C]">
                      15.420+
                    </h4>
                  </div>
                </div>
              </Card>

              <Card variant="default" className="p-5 border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#EAF5FB] text-[#3C95C8] flex items-center justify-center shrink-0">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#555555] uppercase tracking-wider">
                      Wilayah Sebaran
                    </p>
                    <h4 className="text-2xl font-extrabold font-['Poppins'] text-[#2C2C2C]">
                      34 Kota/Kab
                    </h4>
                  </div>
                </div>
              </Card>

              <Card variant="outline" className="p-5">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#3C95C8] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#3C95C8] uppercase tracking-wider">
                      Audit Keuangan
                    </p>
                    <h4 className="text-xl font-bold font-['Poppins'] text-[#2C2C2C]">
                      WTP & Transparan
                    </h4>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* 7. CONTAINERS SHOWCASE */}
        <section id="containers" className="scroll-mt-36 space-y-6">
          <div className="space-y-1">
            <span className="brand-section-label">Layout System</span>
            <h2 className="text-2xl font-bold font-['Poppins'] text-[#2C2C2C]">
              Container Component & Breakpoints
            </h2>
            <p className="text-sm text-[#555555]">
              Wrapper standar dengan auto-margin dan padding responsif untuk menjaga konten tetap seimbang di semua layar.
            </p>
          </div>

          <Card variant="default" className="border-slate-200 p-6 space-y-3">
            {[
              { name: "sm", max: "540px", desc: "Dialog modal, kartu ringkas, form terisolasi" },
              { name: "md", max: "720px", desc: "Artikel blog, teks fokus, detail berita" },
              { name: "lg", max: "960px", desc: "Halaman dokumen, ringkasan transaksi" },
              { name: "xl", max: "1140px", desc: "Landing section, program overview" },
              { name: "2xl", max: "1320px", desc: "Default — Lebar halaman portal & dashboard utama" },
            ].map((item) => (
              <div
                key={item.name}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div className="flex items-center gap-3">
                  <Badge variant="primary" size="sm" className="font-mono">
                    size=&quot;{item.name}&quot;
                  </Badge>
                  <span className="text-xs font-bold text-[#2C2C2C]">
                    max-width: {item.max}
                  </span>
                </div>
                <span className="text-xs text-[#555555]">{item.desc}</span>
              </div>
            ))}
          </Card>
        </section>

        {/* 8. FORM CONTROLS */}
        <section id="forms" className="scroll-mt-36 space-y-6">
          <div className="space-y-1">
            <span className="brand-section-label">Form Components</span>
            <h2 className="text-2xl font-bold font-['Poppins'] text-[#2C2C2C]">
              Input & Textarea Controls
            </h2>
            <p className="text-sm text-[#555555]">
              Elemen form dengan label otomatis (`React.useId`), helper text, pesan validasi error, dan slot ikon.
            </p>
          </div>

          <Card variant="default" className="border-slate-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Nama Lengkap Donatur"
                placeholder="Contoh: Fulan bin Fulan"
                helperText="Nama akan dicantumkan pada sertifikat tanda terima donasi."
              />

              <Input
                label="Alamat Email"
                type="email"
                placeholder="nama@email.com"
                leftIcon={<Mail className="w-4 h-4" />}
              />

              <Input
                label="Pencarian Program"
                placeholder="Cari program bantuan..."
                leftIcon={<Search className="w-4 h-4" />}
                rightIcon={<Badge variant="primary" size="sm">Enter</Badge>}
              />

              <Input
                label="Input State: Validasi Error"
                defaultValue="08123xyz"
                error="Format nomor WhatsApp tidak valid. Gunakan format angka standar."
              />

              <div className="md:col-span-2">
                <Textarea
                  label="Pesan / Doa Kebaikan"
                  placeholder="Tuliskan doa atau pesan kebaikan untuk para penerima manfaat..."
                  helperText="Maksimal 500 karakter. Pesan akan dipublikasikan pada dinding kebaikan."
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 pt-8 pb-12 text-center space-y-3">
          <div className="brand-title text-xs">
            #BergandenganLangitkanKebaikan
          </div>
          <p className="text-xs text-[#555555]">
            Yayasan Jalan Langit (Jalan Langit Foundation) © 2026. Design System & Component Library.
          </p>
        </footer>
      </main>
    </div>
  );
}
