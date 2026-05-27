// vite.config.ts (Corrected Base Logic)
export default defineConfig(() => {
  return {
    base: (() => {
      if (process.env.GITHUB_REPOSITORY) {
        const parts = process.env.GITHUB_REPOSITORY.split('/');
        const owner = parts[0]?.toLowerCase() || '';
        const repo = parts[1] || '';
        
        // If it's a user/organization core page (owner.github.io), the site is served at root '/'
        if (repo.toLowerCase() === `${owner}.github.io`) {
          return '/';
        }
        
        // Otherwise, it's a project page served at sub-path '/repo/'
        return `/${repo}/`;
      }
      return '/';
    })(),
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    // ...
  };
});
