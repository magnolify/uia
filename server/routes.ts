import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express"; // Import express to use its middleware

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Serve HTML preview for printing
  app.post("/api/preview-html", express.json({ limit: '10mb' }), (req, res) => {
    const { html } = req.body;
    if (!html) {
      return res.status(400).send("Missing HTML content");
    }
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  });

  const httpServer = createServer(app);

  return httpServer;
}