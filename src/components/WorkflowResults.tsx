
import React from 'react';
import { Card } from './ui/card';

interface WorkflowResultsProps {
  results: any;
}

export function WorkflowResults({ results }: WorkflowResultsProps) {
  if (!results) return null;

  return (
    <Card className="p-6 backdrop-blur-sm bg-white/50 border border-gray-200 animate-fade-up">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">Workflow Results</h2>
      <pre className="bg-white/70 p-4 rounded-lg overflow-x-auto">
        <code className="text-sm text-gray-800">
          {JSON.stringify(results, null, 2)}
        </code>
      </pre>
    </Card>
  );
}
