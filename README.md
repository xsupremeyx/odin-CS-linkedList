# Linked List for Odin Project (ES6 Modules – Node.js)

## Overview
This project implements a **singly linked list** using **ES6 modules** in **Node.js v22 (LTS)**.
Node v22 automatically detects ES modules, so no extra configuration is required when using the latest LTS version.

---

## Requirements
- Node.js v22 LTS or newer
- ES6 module syntax (`import` / `export`)
- Jest (for running tests)

---

## Project Structure
```
.
ODIN-CS-LINKEDLIST
├── node_modules/
├── .gitignore
├── babel.config.js
├── linkedList.js
├── linkedList.spec.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Classes

### Node
Represents a single element in the linked list.

**Properties**
- `value`
- `nextNode` (default: `null`)

---

### LinkedList
Represents the full list and provides all required operations.

**Internal Property**
- `headNode`

---

## Methods

### Core Methods
- `append(value)`
- `prepend(value)`
- `size()`
- `head()`
- `tail()`
- `at(index)`
- `pop()`
- `contains(value)`
- `findIndex(value)`
- `toString()`

### Extra Credit
- `insertAt(index, ...values)`
- `removeAt(index)`

---

## Running Tests
```bash
npm install
npm test linkedList.test.js
```

---

## Notes
- Written using ES6 class syntax
- Compatible with Node.js v22+ without extra configuration
- Includes full unit test coverage

---