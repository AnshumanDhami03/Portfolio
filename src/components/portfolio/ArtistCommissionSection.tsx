
import SectionWrapper from './SectionWrapper';
import { Button } from '@/components/ui/button';
import { ARTIST_SOCIAL_LINKS } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check } from 'lucide-react';

const commissionTiers = [
    {
        name: 'Sketch',
        price: '$25+',
        description: 'A clean, single-character sketch. Perfect for icons or simple concepts.',
        features: ['Bust-up or Headshot', 'Monochrome', 'Simple Background'],
    },
    {
        name: 'Full Color',
        price: '$50+',
        description: 'A fully rendered character with color and shading.',
        features: ['Full Body', 'Detailed Coloring & Shading', 'Simple Background'],
    },
    {
        name: 'Illustration',
        price: '$100+',
        description: 'A complete scene with one or more characters and a detailed background.',
        features: ['Multiple Characters Option', 'Complex Background', 'Dynamic Posing'],
    },
];

export default function ArtistCommissionSection() {
  return (
    <SectionWrapper id="commissions" title="Commissions">
       <div className="text-center mb-8">
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Interested in a custom piece of art? I'm open for commissions! Below are my general pricing tiers. For a detailed quote, please get in touch.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {commissionTiers.map(tier => (
             <Card key={tier.name} className="flex flex-col text-left">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                    <p className="text-3xl font-headline font-bold text-primary">{tier.price}</p>
                    <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                    <ul className="space-y-2 mb-6">
                       {tier.features.map(feature => (
                         <li key={feature} className="flex items-center">
                            <Check className="h-4 w-4 text-green-500 mr-2 shrink-0"/>
                            <span className="text-muted-foreground">{feature}</span>
                         </li>  
                       ))}
                    </ul>
                    <div className="mt-auto">
                        <Button asChild className="w-full">
                            <a href={`mailto:${ARTIST_SOCIAL_LINKS.gmail}?subject=Commission Inquiry: ${tier.name}`}>
                                Inquire Now
                            </a>
                        </Button>
                    </div>
                </CardContent>
             </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
