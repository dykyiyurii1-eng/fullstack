
import {Block} from 'payload'
export const Hero : Block = {
    slug : 'hero',
    labels: {singular: 'Пеоеваги', plural: 'Переваги'},
    fields: [
        {name: 'anchor', type: 'text', label: 'ID секції'},
        {name: 'badge', type: 'text', label: 'Поле'},
        {name: 'title', type: 'text', label: 'Заголовок', required:true},
        {name: 'buttons', type: 'array', label: 'кнопки', fields:[
            {name: 'icon', type:'text', label: 'Іконка',required:true},
            {name: 'title', type:'text',required:true},
            {name: 'text', type:'textarea',required:true},
          
        
       
        ]},
        
    ]
}