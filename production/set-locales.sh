#!/bin/bash

# This script will iterate over the locales array and set the locale in the config.json file
locales=('it-IT' 'en-US')  # Array di lingue


if ! command -v jq > /dev/null; then
  echo "jq is not installed, installing now... with 'sudo apt install -y jq'"
  sudo apt-get update
  sudo apt-get install -y jq
fi

for locale in "${locales[@]}"; do
  config_file="../dist/kirpachov.com_portfolio/${locale%%-*}/assets/config/config.json"  # Percorso del file di configurazione
  echo "Setting locale to $locale in $config_file"

  if [[ ! -f "$config_file" ]]; then  # Se il file di configurazione non esiste
    # mkdir -p "/tmp/${locale}"  # Crea la directory
    echo "{}" > "$config_file"  # Crea il file di configurazione vuoto
  fi

  # Verifica se la chiave "locale" è presente
  if ! jq -e ".locale" "$config_file" > /dev/null; then
    # Aggiungi la chiave "locale" se non è presente
    jq '. + {"locale": "'"$locale"'"}' "$config_file" > "$config_file.tmp" && mv "$config_file.tmp" "$config_file"
  else
    # Aggiorna il valore della chiave "locale" se è presente
    jq '.locale = "'"$locale"'"' "$config_file" > "$config_file.tmp" && mv "$config_file.tmp" "$config_file"
  fi
done
