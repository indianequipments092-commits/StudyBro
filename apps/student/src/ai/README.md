# NSG BRO AI Foundation

The AI module now has a real provider boundary: the student app sends a structured request to a configurable backend/provider endpoint and receives a typed AIResponse. Provider credentials are supplied at runtime and are never hard-coded in source.

The backend endpoint should own provider secrets, rate limits, moderation, logging policy and model selection. The app can use subject, chapter, topic, intent and optional image metadata to build contextual requests.