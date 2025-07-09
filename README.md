# @oxheberg/whmcs-api

[![npm version](https://badge.fury.io/js/@oxheberg%2Fwhmcs-api.svg)](https://badge.fury.io/js/@oxheberg%2Fwhmcs-api)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A comprehensive, type-safe TypeScript wrapper for the WHMCS API. Built with modern TypeScript practices, this library provides a clean, intuitive interface to interact with all WHMCS API endpoints.

## ✨ Features

- 🔷 **Full TypeScript Support** - Complete type definitions for all API methods and responses
- 🚀 **164 API Methods** - Comprehensive coverage of WHMCS API endpoints
- 🎯 **Optimized Responses** - Clean, deduplicated data structures for better DX
- 🛡️ **Error Handling** - Built-in error handling with detailed error types
- 📦 **Modular Architecture** - Organized by functional modules (Client, Billing, Support, etc.)
- 🌐 **Universal** - Works in Node.js, serverless environments, and modern browsers
- 🧪 **Production Ready** - Battle-tested and actively maintained

## 📦 Installation

```bash
npm install @oxheberg/whmcs-api
```

```bash
pnpm add @oxheberg/whmcs-api
```

```bash
yarn add @oxheberg/whmcs-api
```

## 🚀 Quick Start

```typescript
import { WhmcsClient } from "@oxheberg/whmcs-api";

// Initialize the client
const whmcs = new WhmcsClient({
  url: "https://your-whmcs-domain.com/includes/api.php",
  identifier: "your-api-identifier",
  secret: "your-api-secret",
  accesskey: "your-access-key",
});

// Get client details
const response = await whmcs.client.getClientsDetails({
  clientid: 1,
  stats: true,
});

console.log(`Client: ${response.client.fullname}`);
console.log(`Email: ${response.client.email}`);
console.log(`Total Revenue: ${response.stats.income}`);
```

## 💡 Usage Examples

### Client Management

```typescript
// Create a new client
const newClient = await whmcs.client.addClient({
  firstname: "John",
  lastname: "Doe",
  email: "john.doe@example.com",
  address1: "123 Main Street",
  city: "New York",
  state: "NY",
  postcode: "10001",
  country: "US",
  phonenumber: "+1-555-123-4567",
  password2: "securepassword123",
});

console.log(`Created client with ID: ${newClient.clientid}`);

// Get optimized client details (cleaned response)
const clientDetails = await whmcs.client.getClientsDetails({
  clientid: newClient.clientid,
  stats: true,
});

// Access clean, optimized data structure
console.log("Client Info:", {
  id: clientDetails.client.id,
  name: clientDetails.client.fullname,
  email: clientDetails.client.email,
  phone: clientDetails.client.phonenumberformatted,
  emailPreferences: clientDetails.client.email_preferences,
});

// Users associated with the client (fully typesafe)
clientDetails.users.forEach((user) => {
  console.log(`User: ${user.name} (Owner: ${user.is_owner})`);
});
```

## 🛡️ Error Handling

The library provides comprehensive error handling with detailed error information:

### Using async/await syntax:

```typescript
import { WhmcsClient, WhmcsError } from "@oxheberg/whmcs-api";

try {
  const whmcs = new WhmcsClient({
    url: "https://your-whmcs.com/includes/api.php",
    identifier: "your-identifier",
    secret: "your-secret",
    accesskey: "your-access-key",
  });

  const result = await whmcs.client.getClientsDetails({
    clientid: 999999, // Non-existent client
  });
} catch (error) {
  if (error instanceof WhmcsApiError) {
    console.error("WHMCS API Error:", {
      message: error.message,
    });
  } else {
    console.error("Network or other error:", error);
  }
}
```

### Using .then/.catch syntax:

```typescript
import { WhmcsClient, WhmcsError } from "@oxheberg/whmcs-api";

const whmcs = new WhmcsClient({
  url: "https://your-whmcs.com/includes/api.php",
  identifier: "your-identifier",
  secret: "your-secret",
  accesskey: "your-access-key",
});

whmcs.client
  .getClientsDetails({
    clientid: 999999, // Non-existent client
  })
  .then((result) => {
    console.log("Client details:", result);
  })
  .catch((error) => {
    if (error instanceof WhmcsApiError) {
      console.error("WHMCS API Error:", {
        message: error.message,
      });
    } else {
      console.error("Network or other error:", error);
    }
  });
```

## ⚙️ Configuration

### Basic Configuration

```typescript
const whmcs = new WhmcsClient({
  url: "https://your-whmcs-domain.com/includes/api.php",
  identifier: "your-api-identifier",
  secret: "your-api-secret",
});
```

### Advanced Configuration

```typescript
const whmcs = new WhmcsClient({
  url: "https://your-whmcs-domain.com/includes/api.php",
  identifier: "your-api-identifier",
  secret: "your-api-secret",
  accesskey: "your-access-key", // to bypass IP constraints
  timeout: 10000, // 10 seconds timeout
});
```

### Environment Variables

For security, use environment variables:

```bash
WHMCS_URL=https://your-whmcs-domain.com/includes/api.php
WHMCS_IDENTIFIER=your-api-identifier
WHMCS_SECRET=your-api-secret
WHMCS_ACCESS_KEY=your-access-key # optional
```

```typescript
const whmcs = new WhmcsClient({
  url: process.env.WHMCS_URL!,
  identifier: process.env.WHMCS_IDENTIFIER!,
  secret: process.env.WHMCS_SECRET!,
  accesskey: process.env.WHMCS_ACCESS_KEY!, // optional
});
```

## 🏗️ Architecture

The library is organized into logical modules:

```typescript
whmcs.addons; // Addon management operations
whmcs.affiliates; // Affiliate management operations
whmcs.authentication; // Authentication operations
whmcs.billing; // Billing and invoice operations
whmcs.client; // Client management operations
whmcs.domains; // Domain management operations
whmcs.modules; // Module management operations
whmcs.orders; // Order processing operations
whmcs.products; // Product management operations
whmcs.projectManagement; // Project management operations
whmcs.servers; // Server management operations
whmcs.services; // Service management operations
whmcs.support; // Support ticket operations
whmcs.system; // System administration operations
whmcs.tickets; // Ticket management operations
whmcs.users; // User management operations
```

## 🔧 Development

### Prerequisites

- Node.js 18+
- TypeScript 5+

### Setup

```bash
git clone https://github.com/oxheberg/whmcs-api
cd whmcs-api
npm install
```

### Build

```bash
npm run build
```

### Testing

```bash
npm test
```

## 📝 API Reference

For detailed API documentation, visit the [WHMCS API Documentation](https://developers.whmcs.com/api-reference/).

## 🤝 Contributing

We welcome contributions!

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues

Found a bug? Have a feature request? Please [open an issue](https://github.com/oxheberg/whmcs-api/issues).

## ⭐ Support

If this library helps you, please consider giving it a ⭐ on GitHub!

---

**Made with ❤️ by [Oxheberg](https://oxheberg.com)**
