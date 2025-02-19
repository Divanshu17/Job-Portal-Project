import React from "react";

export const Card = ({ children, className }) => {
  return <div className={`p-4 bg-white shadow-md rounded-lg ${className}`}>{children}</div>;
};

export const CardHeader = ({ children, className }) => {
  return <div className={`pb-4 border-b ${className}`}>{children}</div>;
};

export const CardTitle = ({ children, className }) => {
  return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;
};

export const CardContent = ({ children, className }) => {
  return <div className={`py-4 ${className}`}>{children}</div>;
};

export const CardFooter = ({ children, className }) => {
  return <div className={`pt-4 border-t ${className}`}>{children}</div>;
};
