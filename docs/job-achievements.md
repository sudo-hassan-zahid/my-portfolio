# Job Achievements

This document captures selected achievements, implementation details, challenges, and outcomes from my recent job experiences.

## AlphaSquad

**Role:** Backend Engineer  
**Focus:** Backend systems, queue architecture, PDF generation, LLM workflows, mobile APIs, fair usage systems, cloud operations, and production support.

### 1. Migrated PDF Generation From ElectronJS to Go Backend

I migrated a critical PDF generation workflow from an **ElectronJS desktop app** to a **Go backend service** using an asynchronous queue architecture.

The implementation used a combination of:

```text
Go asynq      -> asynchronous background job processing
chromedp      -> headless Chrome PDF generation using the V8 engine
Next.js routes -> server-side HTML rendering
Redis         -> queue state, retries, and job coordination
```

#### Why It Mattered

PDF generation was a core part of the product because the platform was related to book generation. The old Electron-based approach depended heavily on the user's machine specifications, which made the process inconsistent and difficult to control.

#### Challenges

**Server memory pressure**

During staging tests, the server hit **out-of-memory issues** even with only `2` concurrent PDF generation jobs. This happened because headless Chrome is memory-heavy, especially when rendering large HTML documents into PDFs.

**Solution**

- Upgraded the EC2 machine to better support the workload.
- Refactored Chrome headless memory configuration.
- Tuned Redis TTLs for queue and job cleanup.
- Improved server-side cleanup after PDF generation jobs completed.

**Backend-controlled HTML generation**

The original HTML rendering logic lived inside the ElectronJS app and was React-heavy. Since Go did not have an equivalent rendering setup for that workflow, the backend needed a reliable way to generate the same HTML before sending it to Chrome.

**Solution**

- Used an existing Next.js server connected to the backend.
- Created server-side routes to generate HTML using the same business logic as the Electron app.
- Connected the Go queue worker to the Next.js HTML generation route before PDF rendering.

#### Results

- PDF generation became predictable and backend-controlled.
- The process became independent of customer machine specifications.
- Failed jobs could be retried with full backend control.
- Integrated a Slack webhook to post generation status and failure notifications into a team channel.
- Improved client and customer satisfaction around a critical book-generation workflow.
- Some customers who had refunded because of PDF-related issues returned to the app.

---

### 2. Migrated OpenAI and Gemini Image Generation From Frontend to Backend

I migrated expensive and failure-prone **OpenAI** and **Gemini** image generation calls from the frontend to the backend.

#### Issue

Image generation had several reliability problems when handled from the frontend:

- Mid-generation failures.
- Server-side errors that could have been handled more gracefully.
- Rate limit hits.
- Batch generation failures where one failed image could disrupt the full batch.
- Difficulty upgrading models without breaking older frontend behavior.

#### Solution

I proposed and implemented a backend-driven queue system for image generation. This allowed the platform to process image jobs asynchronously, retry failed work, and keep image generation separate from other critical pipelines such as PDF generation.

#### Technical Work

- Designed a non-blocking, always-running queue system for image generation.
- Kept the image generation pipeline isolated from PDF generation workers.
- Identified retriable errors from OpenAI and Gemini responses.
- Implemented flexible response structs to detect retry-safe failures quickly.
- Re-queued retriable jobs with better priority handling.
- Added exponential backoff for retryable image generation failures.
- Tuned worker and HTTP timeout configuration.
- Increased `nginx` timeout to `5 mins` after observing real image generation timing needs.

#### Results

- Image generation became smoother and more reliable.
- Users gave strong feedback after the backend migration.
- Switching to newer image generation models became easier.
- Usage limits became easier to enforce from the backend.
- Batch generation became more resilient because individual failures could be retried instead of breaking the whole flow.

---

### 3. Implemented Backend Fair Usage Controls

I helped implement a backend fair usage system to prevent excessive LLM usage beyond paid subscription limits.

#### Issue

Some users were consuming LLM calls worth `10x`, `20x`, and even `50x` more than their paid subscription cost.

#### Solution

We implemented a robust backend fair usage mechanism that detected each user's current usage and handled requests according to subscription rules.

#### Technical Work

- Added backend usage checks before allowing expensive LLM operations.
- Used in-memory and cache-based techniques to avoid unnecessary database round trips.
- Reduced repeated DB fetches for minor usage checks.
- Improved backend control over subscription-based limits.

#### Results

- Reduced uncontrolled LLM cost exposure.
- Made usage enforcement consistent across clients.
- Improved the business safety of AI-powered features.
- Created a foundation for more flexible subscription and usage policies.

---

### 4. Built Backend APIs for a Swift iOS App in 10 Days

I planned and implemented the backend APIs for a Swift iOS app within `10 days`, finishing around `1 week` ahead of the deadline.

#### Context

For mobile apps, keeping sensitive and complex operations server-side improves stability, security, and user experience. I worked with the iOS developer to plan the app flows and backend implementation strategy.

#### What I Implemented

- APIs for the core app flows.
- Notifications using Firebase and APNs.
- Server-side OpenAI and Gemini API calls.
- Versioned endpoints specifically designed for the iOS app.
- Backend handling for operations that were not reliable or safe to run directly inside the app.

#### Results

- Delivered the backend ahead of schedule.
- Improved app stability by keeping complex logic server-side.
- Used AI-assisted workflows for repetitive tasks and code generation to speed up development.
- Helped the iOS developer move faster by providing clear, versioned API contracts.

---

### Additional AlphaSquad Achievements

- Built and maintained scalable applications with **Golang**, **Node.js**, **NestJS**, **Laravel**, **React**, and **Next.js**.
- Worked across **MySQL**, **PostgreSQL**, **MongoDB**, **Redis**, **Firebase**, and **Supabase**.
- Integrated payment and business APIs including **Stripe**, **PayKickstart**, **Zoho**, **Clio**, **OpenAI**, and **Gemini**.
- Managed AWS infrastructure across **EC2**, **S3**, **SES**, **CloudFront**, **Route53**, and **SNS**.
- Containerized applications with **Docker** for smoother development and deployment workflows.
- Supported releases with post-deployment fixes, Sentry monitoring, and production debugging.

---

## Viral Webbs

**Role:** Junior Web Developer  
**Focus:** Publishing systems, EPUB development, author websites, CMS work, backend features, deployment support, and production workflows.

### 1. Developed Accessible EPUBs for Multiple Reader Platforms

I developed EPUB files using **HTML**, **XHTML**, and **CSS**, with attention to accessibility and compatibility across reader platforms.

#### Technical Work

- Built structured EPUB content using semantic HTML and XHTML.
- Styled books with CSS while keeping reader compatibility in mind.
- Tested files across common EPUB tools and readers.
- Fixed layout, accessibility, and validation issues during production.

#### Tools Used

```text
Kindle Previewer
Ace by DAISY
Thorium Reader
HTML / XHTML / CSS
```

#### Results

- Improved EPUB quality and reader compatibility.
- Helped maintain accessibility standards for publishing workflows.
- Reduced production issues before final delivery.

---

### 2. Maintained Internal Book Publishing Workflows

I worked on internal systems used as the source of truth for book publishing operations.

#### Technical Work

- Maintained backend features in Laravel and CodeIgniter.
- Worked with MySQL-backed publishing data.
- Fixed workflow bugs affecting book production teams.
- Improved reliability of internal tools used in daily publishing operations.

#### Results

- Helped keep production workflows stable.
- Reduced blockers for internal publishing teams.
- Improved confidence in systems used for book delivery.

---

### 3. Built and Improved Author Websites

I worked on author websites with a focus on responsiveness, usability, and performance.

#### Technical Work

- Built and updated author-facing pages.
- Improved responsive layouts for mobile and desktop.
- Customized WordPress themes and plugins around project requirements.
- Used Bootstrap, jQuery, HTML, CSS, and PHP where needed.

#### Results

- Improved user experience across devices.
- Delivered websites aligned with author and project requirements.
- Supported ongoing client-site maintenance and updates.

---

### 4. Supported Deployments and Server Operations

I handled deployment support and troubleshooting across server-side workflows.

#### Technical Work

- Used Linux server environments for deployment support.
- Worked with FTP, SSH, FileZilla, and PuTTY.
- Investigated server-side issues during delivery.
- Supported fixes for production and staging environments.

#### Results

- Improved deployment reliability.
- Helped resolve server-side issues faster.
- Built practical experience with production support and troubleshooting.

---

### Additional Viral Webbs Achievements

- Built backend features using **Laravel**, **CodeIgniter**, **PHP**, and **MySQL**.
- Customized WordPress themes and plugins based on project requirements.
- Supported accessible publishing workflows using EPUB validation tools.
- Improved author sites for responsiveness, usability, and maintainability.
- Worked closely with production teams to fix publishing and website issues.

---

## Summary

Across both roles, my work has focused on practical engineering delivery:

- Moving fragile workflows into reliable backend systems.
- Designing queue-based architectures for long-running jobs.
- Improving production stability for customer-facing workflows.
- Building APIs for web and mobile clients.
- Supporting publishing, content, and AI-powered systems.
- Balancing fast delivery with maintainability and production safety.
