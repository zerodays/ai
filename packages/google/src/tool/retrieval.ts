import { createProviderDefinedToolFactory } from '@ai-sdk/provider-utils';
import { z } from 'zod/v4';

// Args validation schema
export const retrievalArgsSchema = z.object({
  ragCorpusResource: z.string(),
  similarityTopK: z.number().int().optional(),
  disableAttribution: z.boolean().optional(),
  vectorDistanceThreshold: z.number().min(0).max(1).optional(),
});

type RetrievalArgs = z.infer<typeof retrievalArgsSchema>;

export const retrieval = createProviderDefinedToolFactory<{}, RetrievalArgs>({
  id: 'google-vertex.retrieval',
  name: 'retrieval',
  inputSchema: z.object({
    query: z.object({
      text: z.string().describe('The search query text'),
    }),
  }),
});
