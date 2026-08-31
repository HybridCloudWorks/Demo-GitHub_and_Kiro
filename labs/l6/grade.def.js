'use strict';

// Grader for Lab L6 — Configure an MCP Server.
// Validates .kiro/settings/mcp.json is valid JSON with an mcpServers object
// containing at least one server that has a command.

const {fileExists, jsonValid} = require('../_grader/checks');

const MCP = '.kiro/settings/mcp.json';

module.exports = {
  title: 'Lab L6 — Configure an MCP Server',
  checks: [
    fileExists(MCP, 'Created .kiro/settings/mcp.json'),
    jsonValid(MCP, undefined, 'mcp.json is valid JSON'),
    jsonValid(
      MCP,
      (obj) =>
        (obj && typeof obj.mcpServers === 'object' && obj.mcpServers !== null) ||
        'missing top-level "mcpServers" object',
      'has an mcpServers object',
    ),
    jsonValid(
      MCP,
      (obj) => {
        const servers = obj && obj.mcpServers ? Object.values(obj.mcpServers) : [];
        if (servers.length === 0) return 'define at least one server';
        const withCommand = servers.filter(
          (s) => s && typeof s.command === 'string' && s.command.length > 0,
        );
        return withCommand.length > 0 || 'at least one server needs a "command"';
      },
      'has at least one server with a command',
    ),
  ],
};
