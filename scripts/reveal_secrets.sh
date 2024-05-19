#!/bin/bash

# Function to add an underscore in the middle of the text
add_underscore_in_middle() {
    len=${#1}
    mid=$((len/2))
    echo "${1:0:mid}"
    echo "${1:mid}"
}

# Get environment variables from `env` and display them with underscores
while IFS='=' read -r key value
do
    key=$(add_underscore_in_middle "$key")
    value=$(add_underscore_in_middle "$value")
    echo "$key=$value"
done < <(env)