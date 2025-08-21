# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Expo native module called `expo-store-version-check` that provides functionality to check app store versions on Android Play Store and Apple App Store. It's built using the Expo Modules API and supports Apple (iOS), Android, and Web platforms.

## Development Commands

### Module Development
- `npm run build` - Build the module using expo-module build
- `npm run clean` - Clean build artifacts
- `npm run lint` - Run linting checks
- `npm run test` - Run tests
- `npm run prepare` - Prepare module for development
- `npm run prepublishOnly` - Prepare module for publishing

### Example App Development
Navigate to the `example/` directory first:
- `npm run start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator  
- `npm run web` - Run web version

### Platform-specific IDE Access
- `npm run open:ios` - Open iOS project in Xcode
- `npm run open:android` - Open Android project in Android Studio

## Architecture

This is an Expo native module with the following structure:

### Core Module Files
- `src/ExpoStoreVersionCheckModule.ts` - Main TypeScript module interface
- `src/ExpoStoreVersionCheckModule.web.ts` - Web implementation
- `src/ExpoStoreVersionCheck.types.ts` - TypeScript type definitions
- `src/ExpoStoreVersionCheckView.tsx` - React Native view component
- `src/index.ts` - Main export file

### Native Implementations
- **iOS**: `ios/ExpoStoreVersionCheckModule.swift` - Swift implementation using Expo Modules Core
- **Android**: `android/src/main/java/com/bigbee/storeversioncheck/ExpoStoreVersionCheckModule.kt` - Kotlin implementation

### Configuration
- `expo-module.config.json` - Defines module platform configuration and native module mappings
- `tsconfig.json` - Extends expo-module-scripts base configuration
- `example/` directory contains a complete Expo app for testing the module

### Module Capabilities
The module currently provides:
- Synchronous `hello()` function
- Asynchronous `setValueAsync()` function with event emission
- Native view component with URL loading capability
- Cross-platform support (iOS, Android, Web)

The module uses Expo Modules API v2 architecture with platform-specific implementations that share a common TypeScript interface.