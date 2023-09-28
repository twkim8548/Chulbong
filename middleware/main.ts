export default defineNuxtRouteMiddleware((to, from) => {
    // isAuthenticated() is an example method verifying if a user is authenticated
    console.log(to.path === '/')
    if (to.path === '/') {
        return navigateTo('/chulbong', {replace: true})
    }
})
