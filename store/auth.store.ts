// import { getCurrentUser } from '@/lib/appwrite';
// import { User } from '@sentry/react-native';
// import { create } from 'zustand'
// type AuthState = {
//     isAuthentaticated: boolean;
//     user: User | null;
//     isLoading: boolean;
//     setIsAuthentaticated: (isAuthentaticated: boolean) => void;
//     setUser: (user: User | null) => void;
//     setLoading: (isLoading: boolean) => void;
//     fetchAuthenticatedUser: () => Promise<void>;
// }

// const useAuthStore = create<AuthState>((set) => ({
//     isAuthentaticated: false,
//     user: null,
//     isLoading: true,
//     setIsAuthentaticated: (isAuthentaticated) => set({ isAuthentaticated }),
//     setUser: (user) => set({ user }),
//     setLoading: (isLoading) => set({ isLoading }),
//     fetchAuthenticatedUser: async () => {
//         set({ isLoading: true });
//         try {
//             // Fetch user logic here
//             const user = await getCurrentUser();

//             if (user) set({ isAuthentaticated: true, user: user as User })
//             else set({ isAuthentaticated: false, user: null });
//         } catch (error) {
//             console.error(error);
//             set({ isAuthentaticated: false, user: null });
//         } finally {
//             set({ isLoading: false });

//         }
//     },

// }))
// export default useAuthStore;
import { create } from 'zustand';
import {User} from "@/type";
import {getCurrentUser} from "@/lib/appwrite";

type AuthState = {
    isAuthenticated: boolean;
    user: User | null;
    isLoading: boolean;

    setIsAuthenticated: (value: boolean) => void;
    setUser: (user: User | null) => void;
    setLoading: (loading: boolean) => void;

    fetchAuthenticatedUser: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    user: null,
    isLoading: true,

    setIsAuthenticated: (value) => set({ isAuthenticated: value }),
    setUser: (user) => set({ user }),
    setLoading: (value) => set({isLoading: value}),

    fetchAuthenticatedUser: async () => {
        set({isLoading: true});

        try {
            const user = await getCurrentUser();

            if(user) set({ isAuthenticated: true, user: user as User })
            else set( { isAuthenticated: false, user: null } );
        } catch (e) {
            console.log('fetchAuthenticatedUser error', e);
            set({ isAuthenticated: false, user: null })
        } finally {
            set({ isLoading: false });
        }
    }
}))

export default useAuthStore;