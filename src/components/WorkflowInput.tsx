
import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Loader2 } from 'lucide-react';

interface WorkflowInputProps {
  onSubmit: (workflow: string, userId: string) => void;
}

export function WorkflowInput({ onSubmit }: WorkflowInputProps) {
  const [workflow, setWorkflow] = useState('');
  const [userId, setUserId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async () => {
    setIsProcessing(true);
    await onSubmit(workflow, userId);
    setIsProcessing(false);
  };

  return (
    <Card className="p-6 backdrop-blur-sm bg-white/50 border border-gray-200">
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="workflow" className="text-sm font-medium text-gray-700">
            Enter your workflow in natural language:
          </label>
          <Textarea
            id="workflow"
            value={workflow}
            onChange={(e) => setWorkflow(e.target.value)}
            placeholder="e.g., start a meeting"
            className="min-h-[100px] bg-white/70"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="userId" className="text-sm font-medium text-gray-700">
            Enter your User ID:
          </label>
          <Input
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="demo_user"
            className="bg-white/70"
          />
        </div>

        <Button
          onClick={handleSubmit}
          disabled={isProcessing || !workflow || !userId}
          className="w-full bg-primary hover:bg-primary/90 text-white"
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing workflow...
            </>
          ) : (
            'Run Workflow'
          )}
        </Button>
      </div>
    </Card>
  );
}
