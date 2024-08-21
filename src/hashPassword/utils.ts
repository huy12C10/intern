import * as bcrypt from 'bcrypt'; // Hoặc: const bcrypt = require('bcryptjs');

const saltRounds = 10;

export const hashPasswordHelper = async (plainPassword: string): Promise<string> => {
    try {
        return await bcrypt.hash(plainPassword, saltRounds);
    } catch (error) {
        console.error('Error in hashPasswordHelper:', error);
        throw new Error('Error hashing password');
    }
};

export const comparePasswordHelper = async (plainPassword: string, hashedPassword: string) => {
    try {
        return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (error) {
        console.error('Error in hashPasswordHelper:', error);
        throw new Error('Error hashing password');
    }
};

