"use client";
import React from 'react'
import Table from '@/app/ui/Table';
import { columns } from '@/app/ui/data';
import Image from 'next/image';
import {
  fetchProduits,
  getError,
  getProduits,
  getStatus
} from "@/lib/feature/produit/produitSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Products = () => {
  const dispatch = useDispatch();
  const produits = useSelector(getProduits);
  const status = useSelector(getStatus);
  const error = useSelector(getError);
  console.log(produits);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProduits());
    }
  }, [status, dispatch]);

  return (
    <div>
      produits
      {/* <Table columns={columns} data={produits} /> */}
    </div>
  )
}
export default Products