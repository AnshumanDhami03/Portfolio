
import Image from 'next/image';
import { ARTIST_GALLERY } from '@/lib/data';
import SectionWrapper from './SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function ArtistGallerySection() {
  return (
    <SectionWrapper id="gallery" title="Gallery">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ARTIST_GALLERY.map((artwork, index) => (
          <Card key={index} className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
            <CardHeader>
               <Image
                src={artwork.imageUrl}
                alt={artwork.title}
                width={600}
                height={400}
                className="w-full object-cover rounded-t-lg"
                data-ai-hint={artwork.imageHint}
              />
            </CardHeader>
            <CardContent className="text-left">
                <CardTitle className="text-xl font-bold">{artwork.title}</CardTitle>
                <CardDescription className="mt-2 text-muted-foreground">{artwork.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
