export default function AdminLogin() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <span className="text-xl font-bold text-gray-900">
              Clin<span className="text-teal-600">RAG</span> Admin
            </span>
          </div>
          <p className="text-gray-500">Sign in to manage your site</p>
        </div>

        <form id="login-form" className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue="admin"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              defaultValue="clinrag2024"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div id="error" className="hidden text-red-600 text-sm bg-red-50 px-3 py-2 rounded-lg"></div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2.5 rounded-lg font-medium hover:bg-teal-700 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        document.getElementById('login-form').addEventListener('submit', async (e) => {
          e.preventDefault();
          const username = document.getElementById('username').value;
          const password = document.getElementById('password').value;
          const errorEl = document.getElementById('error');

          try {
            const res = await fetch('/api/auth/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username, password }),
            });
            const data = await res.json();
            if (data.success) {
              window.location.href = '/admin/dashboard';
            } else {
              errorEl.textContent = data.error || 'Invalid credentials';
              errorEl.classList.remove('hidden');
            }
          } catch (err) {
            errorEl.textContent = 'Connection error';
            errorEl.classList.remove('hidden');
          }
        });
      ` }} />
    </div>
  );
}
