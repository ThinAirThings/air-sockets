# GrantGraph Actions

## Introduction

GrantGraph Actions is our company's API functions, facilitating the interaction with our data.

## Table of Contents

-   [Introduction](#introduction)
-   [Installation](#installation)
-   [Usage](#usage)
-   [API Reference](#api-reference)
    -   [getGrant](#getgrant)
-   [Dependencies](#dependencies)
-   [Configuration](#configuration)
-   [Contributors](#contributors)
-   [License](#license)

## Installation

To incorporate GrantGraph Actions into your project, install the npm lib:
The lib won't work if you don't have aws credentials for the GG AWS Cloud installed on the machine you're using the library on.

```bash
npm install @grantgraph/actions
```

## Usage

After installation, you can import the API functions as follows:

```typescript
import { getGrant } from "@grantgraph/actions";
```

## API Reference

### getGrant

Retrieves the details of a grant by its ID.

```typescript
// Function signature
getGrant({grantId: string}): Promise<GrantEntry | null>;
```

**Parameters:**

-   `grantId`: The unique identifier for the grant.

**Returns:**

-   A promise that resolves to the grant details object or null if not found.

### getGrants

Retrieves a set of grants. If you pass the `grantIds` object `limit` will be ignored.

```typescript
// Function signature
getGrants({
    grantIds?: string[]
    limit?: number | 'all'
}): Promise<GrantEntry[] | null>;
```

**Parameters:**

-   `grantIds`: The ids of the grants you want.
-   `limit`: The amount of non-specific grants you want to pull.

**Returns:**

-   A promise that resolves to the grant details or null if not found.

## Configuration

You'll need the env var `GRANTS_TABLE` running in your env. If you're using NextJS this will come from your .env.local file that we create from the vercel env pull. If you're using this in notebooks etc you'll want to use the `dotenv` lib to load the vars from whatever `.env` file you wanna use.

```plaintext
GRANTS_TABLE=your_dynamodb_grants_table_name
```

Replace `your_dynamodb_grants_table_name` with the actual table name you are using in DynamoDB.
