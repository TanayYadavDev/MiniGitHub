# 					MiniGitHub

A lightweight, full-stack version control platform built from scratch to demonstrate low-level Git mechanics, Directed Acyclic Graph (DAG) storage, object-content hashing, and code diff algorithms.

## Features

- **Repository Management:** Create public/private repos, configure default branches, and manage access.
- **Content-Addressed Storage:** Deduplicated file storing using SHA-256 hashes (Blobs, Trees, and Commits).
- **Commit History DAG:** Commit graph traversal with full ancestry logs and parent pointers.
- **Branch Management:** Create, list, switch, and delete branch pointers pointing to specific commits.
- **Code Diff Viewer:** Side-by-side and unified line-by-line file comparison using the Myers Diff algorithm.
- **File Explorer:** Browse directory trees and view file contents at any historical commit state.
- **JWT Authentication:** Secure user authentication and authorization hooks for repository operations.

## Architecture & Data Flow
