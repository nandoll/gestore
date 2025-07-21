"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "./button";
import { MessageSquare, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  text: string;
  sender: "user" | "agent";
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([
          {
            text: "¡Hola! Soy el asistente virtual de AndesMaq. ¿Cómo puedo ayudarte hoy?",
            sender: "agent",
          },
        ]);
        setIsTyping(false);
      }, 1500);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const userMessage: Message = { text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const agentResponse: Message = {
        text: "Gracias por tu mensaje. Un especialista se pondrá en contacto contigo en breve a través de este chat. Para una cotización formal, por favor usa nuestro cotizador online.",
        sender: "agent",
      };
      setMessages((prev) => [...prev, agentResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="rounded-full w-16 h-16 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir chat"
        >
          {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        </Button>
      </div>

      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-80 h-96 bg-stone-800/90 backdrop-blur-md rounded-lg shadow-2xl border border-stone-700 flex flex-col transition-all duration-300 ease-in-out",
          {
            "opacity-100 translate-y-0": isOpen,
            "opacity-0 translate-y-4 pointer-events-none": !isOpen,
          }
        )}
      >
        <header className="p-4 bg-stone-900 rounded-t-lg">
          <h3 className="font-bold text-white text-center">Asistente Virtual</h3>
        </header>

        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={cn("flex", {
                  "justify-end": msg.sender === "user",
                  "justify-start": msg.sender === "agent",
                })}
              >
                <div
                  className={cn("rounded-lg px-3 py-2 max-w-xs text-sm", {
                    "bg-amber-400 text-stone-900": msg.sender === "user",
                    "bg-stone-700 text-white": msg.sender === "agent",
                  })}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                  <div className="bg-stone-700 text-white rounded-lg px-3 py-2 max-w-xs text-sm">
                      <div className="flex items-center space-x-1">
                          <span className="w-2 h-2 bg-stone-400 rounded-full animate-pulse delay-0"></span>
                          <span className="w-2 h-2 bg-stone-400 rounded-full animate-pulse delay-150"></span>
                          <span className="w-2 h-2 bg-stone-400 rounded-full animate-pulse delay-300"></span>
                      </div>
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <form onSubmit={handleSendMessage} className="p-4 bg-stone-900 rounded-b-lg">
          <div className="flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 bg-stone-700 border-stone-600 rounded-l-md py-2 px-3 text-white focus:ring-amber-400 focus:border-amber-400 text-sm"
            />
            <Button type="submit" size="icon" className="rounded-l-none">
              <Send size={20} />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
