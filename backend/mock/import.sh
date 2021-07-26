#!/bin/bash

mongoimport --db myProject --collection documents --type json --file /mock/todos.json --jsonArray