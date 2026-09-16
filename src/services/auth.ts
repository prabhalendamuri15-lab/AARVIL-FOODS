export interface User {
  id: string;
  name: string;
  email: string;
}

export const AuthService = {
  async login(email: string, password: string):Promise<{user: User; token: string}> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock validation
        if (email && password) {
          resolve({
            user: { id: 'usr-1', name: 'Test User', email },
            token: 'mock-jwt-token-123'
          });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 500);
    });
  },

  async register(name: string, email: string, password: string):Promise<{user: User; token: string}> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name && email && password) {
          resolve({
            user: { id: `usr-${Date.now()}`, name, email },
            token: 'mock-jwt-token-456'
          });
        } else {
          reject(new Error('Invalid registration details'));
        }
      }, 500);
    });
  },

  async logout(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 300);
    });
  }
};
