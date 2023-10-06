wasm-pack build motore --target web 
rm -r ./src/assets/pkg
cp -r ./motore/pkg ./src/assets

