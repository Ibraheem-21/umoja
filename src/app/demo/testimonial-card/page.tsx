import { SimpleGrid } from "@chakra-ui/react";
import DemoPageShell from "../_components/DemoPageShell";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";

const testimonials = [
  {
    quote:
      "UMOJA gave my son a structure that carried over into school, practice, and the way he communicates with adults.",
    name: "Parent of 8th Grade Athlete",
    rating: 5,
  },
  {
    quote:
      "The coaches were direct, organized, and consistent. Every workout felt like it had a purpose.",
    name: "High School Guard",
    rating: 4,
  },
  {
    quote:
      "What stood out most was the balance between basketball development and accountability off the court.",
    name: "Community Partner",
  },
];

export default function TestimonialCardDemoPage() {
  return (
    <DemoPageShell
      title="Testimonial Card Demo"
      description="This demo covers short and long testimonial copy with and without visible ratings."
    >
      <SimpleGrid columns={{ base: 1, xl: 2 }} gap={6}>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </SimpleGrid>
    </DemoPageShell>
  );
}
