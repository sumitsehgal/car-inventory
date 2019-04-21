import Home from './components/Home.vue'
import Hello from './components/Hello.vue'
import ManufacturerMain from './components/Manufacturer/Main.vue'
import ManufacturerIndex from './components/Manufacturer/Index.vue'
import ManufacturerCreate from './components/Manufacturer/Create.vue'
import Manufacturer from './components/Manufacturer/View.vue'
import ManufacturerEdit from './components/Manufacturer/Edit.vue'

import ModelsMain from './components/Models/Main.vue'
import ModelsIndex from './components/Models/Index.vue'
import ModelsCreate from './components/Models/Create.vue'
import Models from './components/Models/View.vue'
import ModelsEdit from './components/Models/Edit.vue'

export const routes = [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/hello',
            component: Hello,
        },
        {
            path: '/manufacturers',
            component: ManufacturerMain,
            children: [
                {
                    path: '/',
                    component: ManufacturerIndex
                },
                {
                    path: 'new',
                    component: ManufacturerCreate
                },
                
                {
                    path: ':id',
                    component: Manufacturer
                },
                {
                    path: 'edit/:id',
                    component: ManufacturerEdit
                },
                
            ]
        },
        {
            path: '/models',
            component: ModelsMain,
            children: [
                {
                    path: "/",
                    component: ModelsIndex
                },
                {
                    path: 'new',
                    component: ModelsCreate
                },
                {
                    path: ':id',
                    component: Models
                },
                {
                    path: 'edit/:id',
                    component: ModelsEdit
                },
            ]

        }
    ];