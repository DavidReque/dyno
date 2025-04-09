import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  TableSkeleton,
  CardSkeleton,
  CodeSkeleton,
  FormSkeleton,
  IconSkeleton,
  ListSkeleton,
  ParagraphSkeleton,
} from "../../../packages/components/General/Skeleton/Skeleton";

const meta: Meta = {
  title: "General/Skeleton",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const CardSkeletonExample: StoryObj = {
  render: () => (
    <div className="w-80">
      <CardSkeleton />
    </div>
  ),
};

export const FormSkeletonExample: StoryObj = {
  render: () => (
    <div className="w-80">
      <FormSkeleton />
    </div>
  ),
};

export const CodeSkeletonExample: StoryObj = {
  render: () => (
    <div className="w-80">
      <CodeSkeleton />
    </div>
  ),
};

export const IconSkeletonExample: StoryObj = {
  render: () => (
    <div className="flex items-center justify-center p-4">
      <IconSkeleton />
    </div>
  ),
};

export const ListSkeletonExample: StoryObj = {
  render: () => (
    <div className="w-80">
      <ListSkeleton count={5} />
    </div>
  ),
};

export const TableSkeletonExample: StoryObj = {
  render: () => (
    <div className="w-full max-w-lg">
      <TableSkeleton rows={5} />
    </div>
  ),
};

export const ParagraphSkeletonExample: StoryObj = {
  render: () => (
    <div className="w-80">
      <ParagraphSkeleton lines={4} />
    </div>
  ),
};
