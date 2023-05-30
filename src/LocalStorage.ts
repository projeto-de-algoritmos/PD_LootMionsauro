class LocalStorage {
    static getItem(key: string): string | null {
      const value = localStorage.getItem(key);
      return value !== null ? value : null;
    }
  
    static setItem(key: string, value: string): void {
      localStorage.setItem(key, value);
    }
  
    static removeItem(key: string): void {
      localStorage.removeItem(key);
    }
  
    static getDifficulty(): string {
        const difficulty = this.getItem('gameDifficulty');
        return difficulty !== null ? difficulty : 'hard';
      }
  
    static setDifficulty(difficulty: string): void {
      this.setItem('gameDifficulty', difficulty);
    }
  }
  
  export default LocalStorage;
  