import React from "react";
import { cn } from "@/lib/utils";

/** CardSkeleton*/
export const CardSkeleton: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "animate-pulse bg-gray-200 rounded-lg p-4 space-y-4",
        className
      )}
      data-testid="skeleton-block"
    >
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
        <div className="h-3 bg-gray-300 rounded w-2/3"></div>
      </div>
    </div>
  );
};

/** FormSkeleton*/
export const FormSkeleton: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={cn("animate-pulse space-y-4", className)}>
      <div className="h-4 bg-gray-300 rounded w-1/3"></div>
      <div className="space-y-3">
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
      <div className="h-10 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
};

/** CodeSkeleton*/
export const CodeSkeleton: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "animate-pulse bg-gray-200 rounded p-4 font-mono space-y-2",
        className
      )}
    >
      <div className="h-3 bg-gray-300 rounded w-full"></div>
      <div className="h-3 bg-gray-300 rounded w-11/12"></div>
      <div className="h-3 bg-gray-300 rounded w-10/12"></div>
      <div className="h-3 bg-gray-300 rounded w-9/12"></div>
    </div>
  );
};

/** IconSkeleton */
export const IconSkeleton: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "animate-pulse bg-gray-200 rounded-full",
        className,
        "w-10 h-10"
      )}
    ></div>
  );
};

/** ListSkeleton */
export const ListSkeleton: React.FC<{ className?: string; count?: number }> = ({
  className,
  count = 5,
}) => {
  return (
    <div className={cn("animate-pulse space-y-2", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="h-3 bg-gray-300 rounded w-full"></div>
      ))}
    </div>
  );
};

/** TableSkeleton */
export const TableSkeleton: React.FC<{ className?: string; rows?: number }> = ({
  className,
  rows = 5,
}) => {
  return (
    <div className={cn("animate-pulse overflow-x-auto", className)}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            {Array.from({ length: 4 }).map((_, i) => (
              <th key={i} className="px-4 py-2">
                <div className="h-3 bg-gray-300 rounded w-16"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: 4 }).map((_, colIndex) => (
                <td key={colIndex} className="px-4 py-2">
                  <div className="h-3 bg-gray-300 rounded"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/** ParagraphSkeleton */
export const ParagraphSkeleton: React.FC<{
  className?: string;
  lines?: number;
}> = ({ className, lines = 3 }) => {
  return (
    <div className={cn("animate-pulse space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-3 bg-gray-300 rounded ${
            i === lines - 1 ? "w-2/3" : "w-full"
          }`}
        ></div>
      ))}
    </div>
  );
};
