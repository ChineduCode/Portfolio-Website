export { default } from 'next-auth/middleware'

export const config = { 
    matcher: [
        '/admin/dashboard', 
        '/admin/dashboard/notification',
        '/admin/dashboard/add-new-portfolio',
        '/admin/dashboard/create-new-blog'
    ]
}