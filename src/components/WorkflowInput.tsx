
import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Loader2, Sparkles, UserCircle } from 'lucide-react';

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
    <Card className="relative overflow-hidden backdrop-blur-md bg-white/40 border border-white/50 shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <div className="relative p-8 space-y-6">
        <div className="space-y-2">
          <label htmlFor="workflow" className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Enter your workflow in natural language:
          </label>
          <Textarea
            id="workflow"
            value={workflow}
            onChange={(e) => setWorkflow(e.target.value)}
            placeholder="e.g., start a meeting, analyze patient data, or generate health reports"
            className="min-h-[120px] bg-white/70 border-white/50 backdrop-blur-sm text-lg transition-all duration-200 focus:bg-white/90 focus:shadow-lg"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="userId" className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <UserCircle className="w-5 h-5 text-primary" />
            Enter your User ID:
          </label>
          <Input
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="demo_user"
            className="bg-white/70 border-white/50 backdrop-blur-sm text-lg transition-all duration-200 focus:bg-white/90"
          />
        </div>

        <Button
          onClick={handleSubmit}
          disabled={isProcessing || !workflow || !userId}
          className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-white text-lg py-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:hover:scale-100"
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processing workflow...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-5 w-5" />
              Run Workflow
            </>
          )}
        </Button>
      </div>
    </Card>
  );
}
