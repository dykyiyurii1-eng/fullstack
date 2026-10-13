import { unique } from 'next/dist/build/utils'
import type { CollectionConfig } from 'payload'
export const Pages : Block = {
    slug : 'hero',
    labels: {singular: 'Hero', plural: 'Hero'},
     access: {
    read: () => true,
  },
  admin: {useAsTitile: 'title'},
   fields: [
        {
            name : 'path',
            type : 'text',
            label: 'УРЛ сторінки',
             required: true,
             unique:true,
             defauldValue:'/'
        },
        {
            name:'blocks',
            type:'block',
            label:'Блоки',
            blocks:[
                Hero, Features
            ]

        }
        
    ]

}