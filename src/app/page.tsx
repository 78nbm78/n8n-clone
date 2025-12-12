"use client";

import { Button } from "@/components/ui/button";
import LogoutBtn from "./logout-btn";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

const HomePage = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const {
    data: workflows,
    isFetching,
    isPending,
  } = useQuery(trpc.workflow.getWorkflows.queryOptions());

  const createWorkflow = useMutation(
    trpc.workflow.createWorkflow.mutationOptions({
      onSuccess: () => {
        toast.success("Job started...");
        queryClient.invalidateQueries(
          trpc.workflow.getWorkflows.queryOptions(),
        );
      },
    }),
  );

  const aiTest = useMutation(
    trpc.ai.gemini.mutationOptions({
      onSuccess: () => {
        toast.success("AI job started...");
      },
    }),
  );

  return (
    <section className="max-w-lg m-auto flex flex-col gap-y-6">
      <h1 className="text-lg font-bold">Protected Page</h1>

      {isFetching || isPending ? (
        <div className="space-y-3">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
        </div>
      ) : (
        JSON.stringify(workflows, null, 2)
      )}

      <Button
        variant="outline"
        onClick={() => createWorkflow.mutate()}
        disabled={createWorkflow.isPending}
      >
        {createWorkflow.isPending ? (
          <Loader2 className="animate-spin" />
        ) : (
          "Create Workflow"
        )}
      </Button>

      <Button
        variant="outline"
        onClick={() => aiTest.mutate()}
        disabled={aiTest.isPending}
      >
        {aiTest.isPending ? <Loader2 className="animate-spin" /> : "AI Test"}
      </Button>

      <LogoutBtn />
    </section>
  );
};

export default HomePage;
