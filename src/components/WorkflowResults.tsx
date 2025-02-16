
import React from 'react';
import { Card } from './ui/card';
import { CheckCircle2 } from 'lucide-react';

interface WorkflowResultsProps {
  results: any;
}

export function WorkflowResults({ results }: WorkflowResultsProps) {
  if (!results) return null;

  return (
    <Card className="relative overflow-hidden backdrop-blur-md bg-white/40 border border-white/50 shadow-xl animate-fade-up">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
      <div className="relative p-8">
        <div className="flex items-center gap-3 mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
          <h2 className="text-2xl font-bold text-gray-900">Workflow Results</h2>
        </div>
        <div className="bg-white/70 p-6 rounded-lg backdrop-blur-sm border border-white/50">
          <pre className="text-sm text-gray-800 overflow-x-auto">
            <code className="block whitespace-pre">
              {JSON.stringify(results, null, 2)}
            </code>
          </pre>
        </div>
      </div>
    </Card>
  );
}
