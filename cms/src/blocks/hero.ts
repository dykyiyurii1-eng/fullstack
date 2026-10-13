
import {Block} from 'payload'
import { Features } from '../blocks/features'
import { Hero } from '../blocks/Hero'
export const fuetures : Block = {
    slug : 'hero',
    labels: {singular: 'Hero', plural: 'Hero'},
    fields: [
        {name: 'anchor', type: 'text', label: 'ID секції'},
        {name: 'badge', type: 'text', label: 'Поле'},
        {name: 'title', type: 'text', label: 'Заголовок', required:true},
        {name: 'subtitle', type: 'textarea', label: 'Підзаголовок', required:true},
        {name: 'image', type: 'upload', relationTo:'media', label: 'Заголовок', required:true},
        {name: 'buttons', type: 'array', label: 'кнопки', fields:[
            {name: 'text', type:'text',required:true},
            {name: 'text', type:'text',required:true},
            {name: 'variant',   type:'select',required:true},
            deefaultValue : 'primary',
            options : [ 
                {}

            ]
        
       
        ]},
        
    ]
}