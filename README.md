# GYN Clinical - Model Catalog Setup

This directory contains Hermes-compatible model catalogs with free OpenRouter models for the GYN Clinical medical application.

## What's Included

### 1. Custom Model Catalog (`custom_model_catalog.json`)
A comprehensive catalog featuring:
- **20+ free OpenRouter models** for coding, reasoning, and general AI tasks
- **5 Nous Research models** (Hermes's default provider)
- All models are free-to-use with no API key required

### 2. Update Script (`update_free_models_simple.py`)
Script to regenerate the catalog with updated free models from OpenRouter.

## How to Use These Models

### With Hermes CLI
```bash
# Set the catalog as your model source
hermes config set model_catalog.url file:///path/to/gyn/custom_model_catalog.json

# Refresh model picker cache
hermes model --refresh

# Switch models interactively
hermes config set model.default poolside/laguna-m.1:free
/herman model poolside/laguna-m.1:free
```

### With Hermes Chat Commands
```bash
# Use a specific model for a session
hermes chat -m poolside/laguna-m.1:free -q "Help me fix this bug"

# List available models
hermes model
```

### With Hermes Config
In your Hermes config.yaml, set:
```yaml
model_catalog:
  enabled: true
  url: file:///path/to/gyn/custom_model_catalog.json
  ttl_hours: 24
```

## Recommended Models by Use Case

### For Coding & Development
- `poolside/laguna-m.1:free` - Coding agent (33B-A3B)
- `qwen/qwen3-coder:free` - Code MoE (480B-A35B)
- `nvidia/nemotron-nano-9b-v2:free` - Reasoning LLM

### For General AI Tasks
- `meta-llama/llama-3.3-70b-instruct:free` - General purpose
- `nousresearch/hermes-3-llama-3.1-405b:free` - Hermes-compatible
- `openai/gpt-oss-20b:free` - MoE 21B (3.6B active)

### For Multimodal Tasks
- `nvidia/nemotron-nano-12b-v2-vl:free` - Multimodal VL
- `google/gemma-4-26b-a4b-it:free` - MoE multimodal

### Lightweight Options
- `liquid/lfm-2.5-1.2b-thinking:free` - Lightweight thinking
- `google/flan-t5-base:free` - Factual knowledge
- `tiiuae/falcon-7b-instruct:free` - Instruction following

## Maintaining Your Catalog

To update with new free models from OpenRouter:

```bash
python scripts/update_free_models_simple.py custom_model_catalog.json
```

This will:
1. Keep the existing Nous Research models
2. Refresh the OpenRouter free models list
3. Maintain the same file format compatible with Hermes

## Notes

- All listed models are **free to use** - no OpenRouter API key required
- Models are curated for reliability and performance
- The catalog automatically merges with Hermes's default catalog
- Multiple choices reduce dependency on any single model
- Perfect for medical application development where model stability matters

## License

This model catalog is provided for free usage with the GYN Clinical project.
All models are free to use under their respective licenses.