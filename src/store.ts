import { writable } from 'svelte/store';
import type { PublicKey } from '@solana/web3.js';
import type * as anchor from '@project-serum/anchor';
import type {User} from './models/Types';

// User
let user: User;

export const USER = writable<User>({
    wallet: null
});