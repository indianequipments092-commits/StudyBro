# NSG BRO — Master Project Specification

## Purpose
NSG BRO is designed as a scalable NEET Learning OS, not merely a PDF/video/DPP app.

Core learning loop:
Content → Learning → Practice → Analysis → Revision → Improvement

## Master Requirement Source
The authoritative product blueprint is the 100-point NSG BRO Advanced Feature Blueprint agreed in the conversation. All 100 requirements must be tracked across the milestone plan; no requirement may be silently dropped.

## Architecture Layers
1. Experience Layer — futuristic, premium, study-focused UI/UX
2. Content Layer — Notes, PDF, Video, DPP, PYQ, Tests
3. Learning Layer — progress, missions, XP, streak, mistakes, adaptive learning, revision
4. AI Layer — doubt solving, image/diagram analysis, AI teacher, voice, terminology, search
5. Security Layer — device, sessions, watermark, secure content, offline protection
6. Cloud Layer — database, storage, sync, notifications, backups
7. Admin Layer — CMS, users, questions, tests, analytics, notifications, roles, audit and remote controls

## Product Rules
- Gujarati Medium is the initial focus, with English scientific terminology.
- Future Hindi/English support must remain architecturally possible.
- NSG BRO uses a fresh architecture; legacy GMS BRO chapter counts/structure must not be copied automatically.
- UI must be futuristic but study-focused, not distracting.
- Chapter Galaxy must have a practical List View alternative.
- Content must be remotely manageable without requiring an APK rebuild for ordinary content changes.
- Admin control must be possible from the Android Admin App; an Admin Web Panel is also supported for advanced/bulk work.
- Offline-capable features must sync safely when connectivity returns.
- Accessibility, performance and reliability are first-class requirements.
- Paid access, demo, coupons and related future controls should be architecture-ready.

## Technical Safety Rules
- Never hard-code secrets, API keys, credentials or database passwords in source control.
- 100% screenshot/screen-recording prevention is not promised; use platform-supported protections, secure screen flags where appropriate, secure delivery, session controls and dynamic watermarking.
- Voice and TTS capabilities must respect actual device/service support.
- AI requests should use a secure backend/service boundary rather than exposing provider secrets in the client.
- PDF/video content should use cloud/secure delivery architecture rather than embedding the full content in the APK.

## Milestone Plan
1. Foundation + Core NSG BRO
2. Core Study Engine
3. Student Progress + Motivation
4. Learning Brain
5. AI + Smart Tools
6. Offline + Security
7. Complete Admin Control System
8. Live Control + Production + Advanced System

## Milestone Completion Protocol
For every milestone:
Step 1 — Build the milestone scope completely.
Step 2 — Verification 1: errors, runtime, functionality, navigation and basic integration.
Step 3 — Verification 2: deep requirements, edge cases, integration, security, performance and regression verification.
Step 4 — Fix remaining errors; only then mark COMPLETE and create the milestone Git commit.

## Milestone 1 Scope
Milestone 1 establishes the foundation: app/navigation architecture, authentication/profile/class/NEET target foundations, subject/chapter/topic/resource data model, backend/database/storage/API foundations, design system, performance foundations, security foundations, and Learning Engine data foundations.

## Development Rule
During discussion/specification steps, do not start application coding unless explicitly instructed. Each completed milestone gets a stable Git commit before the next milestone begins.
