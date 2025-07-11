
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { ARTIST_GALLERY } from '@/lib/data';
import SectionWrapper from './SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ArtistGallerySection() {
  const [likes, setLikes] = useState<number[]>(() => ARTIST_GALLERY.map(() => 0));
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());

  const handleLike = (index: number) => {
    const newLikes = [...likes];
    const newLikedItems = new Set(likedItems);

    if (likedItems.has(index)) {
      newLikes[index]--;
      newLikedItems.delete(index);
    } else {
      newLikes[index]++;
      newLikedItems.add(index);
    }
    
    setLikes(newLikes);
    setLikedItems(newLikedItems);
  };

  return (
    <SectionWrapper id="gallery" title="Gallery">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ARTIST_GALLERY.map((artwork, index) => (
          <Card key={index} className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col">
            <CardHeader className="p-0">
               <Image
                src={artwork.imageUrl}
                alt={artwork.title}
                width={600}
                height={400}
                className="w-full object-cover"
                data-ai-hint={artwork.imageHint}
              />
            </CardHeader>
            <CardContent className="text-left p-6 flex-grow flex flex-col">
                <CardTitle className="text-xl font-bold">{artwork.title}</CardTitle>
                <CardDescription className="mt-2 text-muted-foreground flex-grow">{artwork.description}</CardDescription>
                <div className="flex items-center justify-end mt-4">
                  <Button variant="ghost" size="icon" onClick={() => handleLike(index)} className="group">
                    <Heart className={cn(
                      "h-6 w-6 text-muted-foreground group-hover:text-red-500 transition-colors",
                      likedItems.has(index) && "fill-red-500 text-red-500"
                    )} />
                  </Button>
                  <span className="ml-2 text-sm font-medium text-muted-foreground">{likes[index]}</span>
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
