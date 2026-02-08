
export interface Course {
  id: string;
  title: string;
  duration: string;
  category: string;
  description: string;
  image: string;
  price: string;
  highlights: string[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  category: 'Palestra' | 'Workshop' | 'Seminário';
  theme: string;
  price: string;
  image: string;
  location: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}
