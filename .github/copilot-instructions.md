# Design System - React Monorepo with Turborepo and Storybook

**ALWAYS FOLLOW THESE INSTRUCTIONS FIRST** and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

This is a React design system built as a monorepo using Turborepo for build orchestration, Storybook for component development and documentation, TypeScript for type safety, and CSS modules for styling. The system is designed to be consumed by React applications and provides reusable UI components.

## How to Use These Instructions

1. **Read the Repository Status section** to understand current development phase
2. **Check Environment Requirements** before running any commands
3. **Follow commands in order** - many commands have dependencies
4. **Use the validation commands** to check if features are available before using them
5. **Refer to troubleshooting** if you encounter expected errors
6. **NEVER CANCEL** long-running commands - set appropriate timeouts instead

## Repository Status

**CURRENT STATE**: The repository is currently minimal and in initial setup phase. The full monorepo structure with Turborepo, React components, and Storybook is being implemented in PR #3.

**DEVELOPMENT TIMELINE**: 
- Phase 1 (Current): Minimal repository with basic instructions ✅
- Phase 2 (In Progress): Monorepo initialization with Turborepo and package structure (PR #3)
- Phase 3 (Planned): React UI components with TypeScript and CSS modules
- Phase 4 (Planned): Storybook integration and component documentation
- Phase 5 (Planned): Testing, linting, and CI/CD setup

**TARGET ARCHITECTURE**: React monorepo with:
- Turborepo for build system and task orchestration
- `packages/ui` for React components with TypeScript
- `apps/storybook` for component documentation and development
- CSS modules for component styling
- Storybook accessible via remote localhost for testing

## Working Effectively

### Environment Requirements

**Node.js Environment**: This repository requires Node.js and npm. Current verified versions:
- Node.js: v20.19.4
- npm: 10.8.2
- Git: 2.50.1

**Environment Check**: Run this to verify your environment:
```bash
node --version && npm --version && git --version
# Expected: Node.js v20+, npm 10+, Git 2.40+
```

### Initial Setup (Current Implementation)

**CURRENT STATE VALIDATION**: The repository is currently minimal (only Test.md). Check current state before proceeding:

1. **Check repository structure**:
   ```bash
   ls -la
   find . -name "package.json" -o -name "turbo.json" -o -name ".storybook" | head -10
   ```

2. **Validate current state**:
   ```bash
   # This will show "no package.json" error in current minimal state - this is expected
   npm install
   # Expected error: "Could not read package.json: Error: ENOENT"
   ```

3. **When monorepo structure exists** (check for package.json first):
   ```bash
   # Only run if package.json exists
   if [ -f "package.json" ]; then
     npm install
     # NEVER CANCEL: Installation may take 5-10 minutes depending on dependencies. Set timeout to 15+ minutes.
   else
     echo "Repository not yet initialized with package.json - this is expected in minimal state"
   fi
   ```

### Build System Commands (Target Architecture)

**CRITICAL TIMING**: All build commands may take significant time. NEVER CANCEL these operations.

**PREREQUISITE CHECK**: Always verify package.json exists before running build commands:
```bash
if [ ! -f "package.json" ]; then
  echo "ERROR: No package.json found. Repository may be in minimal state or monorepo not yet initialized."
  echo "Current repository structure:"
  ls -la
  exit 1
fi
```

1. **Bootstrap the monorepo** (when package.json exists):
   ```bash
   npm install
   # NEVER CANCEL: Initial install takes 5-10 minutes. Set timeout to 15+ minutes.
   ```

2. **Build all packages** (when build script exists):
   ```bash
   # Check if build script exists first
   npm run build 2>/dev/null || echo "Build script not available - repository may not be fully initialized"
   # NEVER CANCEL: Build takes 10-15 minutes for full monorepo. Set timeout to 20+ minutes.
   ```

3. **Development mode** (when dev script exists):
   ```bash
   npm run dev 2>/dev/null || echo "Dev script not available - repository may not be fully initialized"
   # NEVER CANCEL: Dev server startup takes 2-5 minutes. Set timeout to 10+ minutes.
   ```

4. **Storybook development** (when storybook is configured):
   ```bash
   npm run storybook 2>/dev/null || echo "Storybook not configured - will be available after monorepo setup"
   # NEVER CANCEL: Storybook startup takes 3-8 minutes. Set timeout to 15+ minutes.
   # Expected to run on localhost:6006 and be accessible remotely
   ```

### Testing Commands

**PREREQUISITE**: These commands only work when the monorepo is fully initialized with package.json and test setup.

1. **Check if tests are available**:
   ```bash
   # Verify test setup exists
   if [ -f "package.json" ] && npm run | grep -q "test"; then
     echo "Test scripts available"
   else
     echo "Tests not yet configured - will be available after monorepo setup"
   fi
   ```

2. **Run all tests** (when available):
   ```bash
   npm run test 2>/dev/null || echo "Test suite not configured yet"
   # NEVER CANCEL: Test suite takes 5-10 minutes. Set timeout to 15+ minutes.
   ```

3. **Run tests in watch mode** (when available):
   ```bash
   npm run test:watch 2>/dev/null || echo "Test watch mode not configured yet"
   # For development - runs continuously
   ```

4. **Lint all code** (when available):
   ```bash
   npm run lint 2>/dev/null || echo "Linting not configured yet"
   # NEVER CANCEL: Linting takes 2-5 minutes. Set timeout to 10+ minutes.
   ```

5. **Type checking** (when available):
   ```bash
   npm run type-check 2>/dev/null || echo "TypeScript checking not configured yet"
   # NEVER CANCEL: TypeScript checking takes 3-8 minutes. Set timeout to 15+ minutes.
   ```

### Pre-commit Validation

**ONLY run when monorepo is fully initialized**. Check first:

```bash
# Verify repository is ready for validation
if [ ! -f "package.json" ]; then
  echo "Repository not ready for validation - no package.json found"
  echo "This is expected in minimal repository state"
  exit 0
fi

# Run full validation suite (only when scripts are available)
echo "Running pre-commit validation..."
npm run lint && npm run type-check && npm run test && npm run build
# NEVER CANCEL: Complete validation takes 15-25 minutes. Set timeout to 30+ minutes.
```

**In minimal repository state**: Only run basic git checks:
```bash
# Basic validation for minimal state
git status
git diff --check  # Check for whitespace errors
echo "Repository in minimal state - skipping npm validation"
```

## Validation Scenarios

### CRITICAL: Manual Testing Requirements

After making any changes to components or stories, ALWAYS perform these validation steps:

1. **Component Development Workflow**:
   ```bash
   # Start Storybook
   npm run storybook
   # Wait for "Storybook ready" message - takes 3-8 minutes
   # Navigate to http://localhost:6006
   ```

2. **Test Button Component** (Primary validation scenario):
   - Open Storybook in browser at `http://localhost:6006`
   - Navigate to "Button" component in sidebar
   - Verify all button variants render correctly:
     - Primary button
     - Secondary button
     - Different sizes (small, medium, large)
     - Disabled state
   - Test interactivity: click buttons and verify they respond
   - Check CSS modules are applied correctly (no style conflicts)

3. **Component Integration Testing**:
   ```bash
   # In packages/ui directory (when it exists)
   npm run build
   # Verify components export correctly and can be imported
   ```

4. **Storybook Remote Access Testing**:
   - Ensure Storybook is accessible from external URLs (not just localhost)
   - Test that all stories load without errors
   - Verify CSS modules styling is consistent

### Build Validation

Always validate that changes don't break the build:

```bash
# Clean build test
rm -rf node_modules packages/*/node_modules apps/*/node_modules
npm install
npm run build
# NEVER CANCEL: Clean build takes 15-20 minutes. Set timeout to 25+ minutes.
```

## Key Directories and Files

### Monorepo Structure (Target)
```
design-system/
├── packages/
│   └── ui/                 # React components library
│       ├── src/
│       │   ├── components/
│       │   │   └── Button/ # Example: Button component with CSS modules
│       │   └── index.ts    # Component exports
│       └── package.json
├── apps/
│   └── storybook/         # Storybook application
│       ├── .storybook/    # Storybook configuration
│       └── stories/       # Component stories
├── turbo.json             # Turborepo configuration
├── package.json           # Root package.json with workspaces
└── tsconfig.json          # TypeScript configuration
```

### Important Configuration Files

1. **turbo.json** - Defines build pipeline and task dependencies
2. **package.json** (root) - Workspace configuration and scripts
3. **.storybook/main.js** - Storybook configuration
4. **tsconfig.json** - TypeScript configuration for entire monorepo

## Development Workflow

### Adding a New Component

1. **Create component structure**:
   ```bash
   # In packages/ui/src/components/
   mkdir NewComponent
   cd NewComponent
   touch index.ts NewComponent.tsx NewComponent.module.css
   ```

2. **Always create CSS modules file** for styling:
   ```css
   /* NewComponent.module.css */
   .button {
     /* Component styles */
   }
   ```

3. **Export from main index**:
   ```typescript
   // packages/ui/src/index.ts
   export { NewComponent } from './components/NewComponent';
   ```

4. **Create Storybook story**:
   ```bash
   # In apps/storybook/stories/
   touch NewComponent.stories.tsx
   ```

5. **Test the component**:
   ```bash
   npm run storybook
   # Verify new component appears in Storybook
   ```

### CSS Modules Best Practices

- Always use CSS modules for component styling: `ComponentName.module.css`
- Import styles as: `import styles from './Component.module.css'`
- Apply classes as: `className={styles.componentClass}`
- Avoid global CSS unless absolutely necessary

## Troubleshooting

### Current Minimal State Issues

1. **"Could not read package.json" error**:
   ```bash
   # This is EXPECTED in current minimal state
   npm install
   # Error: "Could not read package.json: Error: ENOENT"
   # Solution: Wait for monorepo setup in PR #3, or initialize package.json manually
   ```

2. **"Build script not available" messages**:
   ```bash
   # This is EXPECTED - monorepo not yet initialized
   npm run build
   # Solution: Wait for package.json and build scripts to be added
   ```

3. **Repository appears empty**:
   ```bash
   # Current minimal state only contains:
   ls -la
   # Expected: .git/ .github/ Test.md (and copilot-instructions.md)
   ```

### Common Issues (Once Monorepo is Implemented)

1. **Storybook won't start**:
   ```bash
   # Clear cache and restart
   rm -rf node_modules/.cache
   npm run storybook
   ```

2. **Build failures in monorepo**:
   ```bash
   # Check Turborepo cache
   npx turbo prune
   npm run build
   ```

3. **CSS modules not working**:
   - Verify files are named `*.module.css`
   - Check TypeScript declarations for CSS modules
   - Ensure proper import syntax

4. **Port conflicts**:
   - Storybook default port: 6006
   - Dev server may use: 3000
   - Check `package.json` scripts for port configurations

### Performance Tips

- Use `npm run dev` for parallel development across all packages
- Use `npx turbo build --filter=ui` to build only specific packages
- Use `npm run storybook` for component development and documentation

## CI/CD Expectations

When CI/CD is configured, expect these requirements:
- All tests must pass
- TypeScript compilation must succeed
- Linting must pass with no errors
- Storybook must build successfully
- All components must have corresponding stories

ALWAYS run the complete validation suite before pushing:
```bash
npm run lint && npm run type-check && npm run test && npm run build
```

## Common Commands Reference

```bash
# Quick development setup
npm install && npm run dev

# Component testing workflow  
npm run storybook
# Wait 3-8 minutes, then open http://localhost:6006

# Full validation before commit
npm run lint && npm run type-check && npm run test && npm run build
# NEVER CANCEL: Takes 15-25 minutes total

# Clean slate rebuild
rm -rf node_modules packages/*/node_modules apps/*/node_modules
npm install && npm run build
# NEVER CANCEL: Takes 15-20 minutes

# Turborepo specific commands (when available)
npx turbo build
npx turbo dev
npx turbo test
```

Remember: This design system prioritizes component reusability, type safety, and developer experience through Storybook documentation.