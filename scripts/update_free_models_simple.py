#!/usr/bin/env python3
"""
Simple script to create a custom Hermes model catalog with free OpenRouter models.
This script creates a curated list of popular free models without making API calls.

Usage:
    python update_free_models_simple.py [output_file]
    
If output_file is not specified, defaults to 'custom_model_catalog.json'
"""

import json
from datetime import datetime, timezone
import sys

def get_curated_free_models():
    """Return a curated list of reliable free OpenRouter models."""
    return [
        {'id': 'poolside/laguna-m.1:free', 'description': ''},
        {'id': 'qwen/qwen3-coder:free', 'description': ''},
        {'id': 'meta-llama/llama-3.3-70b-instruct:free', 'description': ''},
        {'id': 'nousresearch/hermes-3-llama-3.1-405b:free', 'description': ''},
        {'id': 'openai/gpt-oss-20b:free', 'description': ''},
        {'id': 'google/gemma-4-26b-a4b-it:free', 'description': ''},
        {'id': 'nvidia/nemotron-nano-9b-v2:free', 'description': ''},
        {'id': 'nvidia/nemotron-nano-12b-v2-vl:free', 'description': ''},
        {'id': 'liquid/lfm-2.5-1.2b-thinking:free', 'description': ''},
        {'id': 'cognitivecomputations/dolphin-mistral-24b-venice-edition:free', 'description': ''},
        {'id': 'cohere/codellama-34b-python:free', 'description': ''},
        {'id': 'mistralai/mistral-7b-instruct:free', 'description': ''},
        {'id': 'zmdrummermc/phi-3-mini-4k-instruct:free', 'description': ''},
        {'id': 'togethercomputer/GPT-NeoXT-Chat-7B:free', 'description': ''},
        {'id': 'openchat/openchat-7b:free', 'description': ''},
        {'id': 'allenai/tulu-2-dpo-7b-pythia-7b:free', 'description': ''},
        {'id': 'gryphe/mythomist-7b:free', 'description': ''},
        {'id': 'undi95/llama-2-7b-chat:hf', 'description': ''},
        {'id': 'google/flan-t5-base:free', 'description': ''},
        {'id': 'tiiuae/falcon-7b-instruct:free', 'description': ''},
        {'id': 'tencent/hy3:free', 'description': ''},
    ]

def create_base_catalog():
    """Create a minimal base catalog with just the Nous provider (which is Hermes's default)."""
    return {
        'providers': {
            'nous': {
                'models': [
                    {'id': 'meta-llama/llama-3.1-8b-instruct:free', 'description': ''},
                    {'id': 'meta-llama/llama-3.1-70b-instruct:free', 'description': ''},
                    {'id': 'nousresearch/hermes-3-llama-3.1-405b:free', 'description': ''},
                    {'id': 'cohere/command-r-plus:free', 'description': ''},
                    {'id': 'cohere/codellama-34b-python:free', 'description': ''},
                ],
                'metadata': {
                    'display_name': 'Nous Research',
                    'note': 'Default models from Nous Research'
                }
            },
            'openrouter': {
                'metadata': {
                    'display_name': 'OpenRouter (free models)',
                    'note': 'Curated list of reliable free models'
                },
                'models': []  # Will be filled in
            }
        },
        'metadata': {
            'source': 'Combined Nous provider + curated free OpenRouter models',
            'description': 'Hermes-compatible model catalog for free OpenRouter models',
            'updated_at': datetime.now(timezone.utc).isoformat().replace('+00:00', 'Z')
        }
    }

def main():
    output_file = sys.argv[1] if len(sys.argv) > 1 else 'custom_model_catalog.json'
    
    # Create base catalog
    catalog = create_base_catalog()
    
    # Add free OpenRouter models
    free_models = get_curated_free_models()
    catalog['providers']['openrouter']['models'] = free_models
    
    # Write output
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(catalog, f, indent=2, ensure_ascii=False)
    
    print(f"Successfully wrote custom catalog to {output_file}")
    print(f"  - Nous models: {len(catalog['providers']['nous']['models'])}")
    print(f"  - OpenRouter free models: {len(catalog['providers']['openrouter']['models'])}")
    
    # Show models by category
    print("\nNous Research models:")
    for model in catalog['providers']['nous']['models']:
        print(f"  - {model['id']}")
    
    print("\nOpenRouter free models:")
    for model in catalog['providers']['openrouter']['models']:
        print(f"  - {model['id']}")

if __name__ == '__main__':
    main()