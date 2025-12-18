/**
 * TypeScript Types and Interfaces
 */

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface ApiResponse<T = any> {
    success: boolean;
    message?: string;
    data?: T;
}

export interface PricingPlan {
    id: string;
    name: string;
    price: number;
    currency: string;
    period: string;
    features: string[];
    popular?: boolean;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    text: string;
    rating: number;
    avatar?: string;
}

export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: string;
}

