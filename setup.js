/**
 * This file is intended to facilitate relay+create-react-app
 */

const fs=require('fs')
const path=require('path')
const file=path.resolve('./node_modules/babel-preset-react-app/index.js')
const text=fs.readFile(file, 'utf8', (err, data)=>{
    if(err){
        throw new Error(err)
    }
    if(!data.includes('babel-plugin-relay')){
        if(data.includes('const plugins = [')){
            const updatedText=data.replace(
                'const plugins = [', 
                "const plugins = [\n require.resolve('babel-plugin-relay'), "
            )
            fs.writeFile(file, updatedText, 'utf8', (err)=>{
                if(err){
                    throw new Error('Failed to write')
                }
            })
        }
        else {
            throw new Error('Failed to inject babel-plugin-relay')
        }
    }
 })