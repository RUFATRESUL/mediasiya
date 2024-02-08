import { parse } from 'path/posix';
import React, { useState } from 'react'
import { Container,Box,IconButton,Button,Drawer,Typography,TextField,Grid,Card,CardActions,CardContent,CardMedia } from '@mui/material';
import Textarea from '@mui/joy/Textarea'
import {useParams} from 'react-router-dom'
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import {CarouselProvider,Slider,Slide,ButtonBack,ButtonNext} from 'pure-react-carousel'
import "pure-react-carousel/dist/react-carousel.es.css"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ClearIcon from '@mui/icons-material/Clear';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import Image01 from '../assert/V2sUGyuG1fLMSdf2V91nkCvwGySfHd-metaRkJfSU1HXzE3MDM4MzQ2NDAzOTkuanBn-.webp'
import Image02 from '../assert/JJJbJV5MzQqlIHdc37wULKLNDvUpaQ-metaRkJfSU1HXzE3MDYwMzA5ODA0MzcuanBn-.webp'
import Image03 from '../assert/f7vJL7VpfWCETlmo2AtOaW1d0RZk82-metaX2lubmV3c18wYmYwZTJmOWI5N2Y3Y2RjYzIyODk4NjMxX28uanBn-.webp'
import Link from 'react-router-dom'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
interface Params{
    detailId:string ;
    [key:string]:string | undefined;
  }
const items = [
    { id: 1,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F196%2FaI71kxGW1g7K3Vg4iLLLelnhRbP2AX-metaRkJfSU1HXzE3MDY2MzQyNzUxODEuanBn-.webp&w=1920&q=75',
      title:'AR Ədliyyə Nazirliyinin Ədliyyə Akademiyasında mediatorların imtahanı keçirilib.',
      content:'30 yanvar 2024-cü il tarixində mediasiya təlim qurumu olan Ədliyyə Akademiyasında ixtisaslaşmış ailə və əmək mediasiya təlimlərini başa vuran mediatorların yekun imtahanı keçirilmişdir.İmtahanda “Mediatorların hazırlığı və ixtisaslarının artırılması ilə bağlı Təlim Qaydası”nın təsdiq edilməsi barədə Nazirlər Kabinetinin Qərarına uyğun olaraq, İmtahan Komissiyası tərəfindən mediasiya ilə bağlı namizədlərin nəzəri və təcrübi bilikləri yoxlanılmışdır. İmtahan Komissiyasının sədri, Ədliyyə Akademiyasının prorektoru Elçin Xələfov, Komissiyanın üzvləri Mediasiya Şurası İdarə Heyətinin sədri Nadir Adilov, Komissiyanın müstəqil ekspert üzvü, Azərbaycan Respublikası Məhkəmə Hakimləri Assosiasiyaları İttifaqının nümayəndəsi, Vəkillər Kollegiyasının üzvü Kəramət Əliyev mediatorlara ailə və əmək münasibətlərindən irəli gələn mübahisələr üzrə mediasiya ilə bağlı istiqamətlər üzrə suallar verib və mediatorların bilik səviyyəsini qiymətləndiriblər.' },
     {
        id:2,
        image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F193%2FJJJbJV5MzQqlIHdc37wULKLNDvUpaQ-metaRkJfSU1HXzE3MDYwMzA5ODA0MzcuanBn-.webp&w=1920&q=75',
        title:'Bu gün Mediasiya Şurası Etika Komitəsinin yeni tərkibli ilk iclası keçirilib.',
        content:'Mediasiya Şurası Etika Komitəsinin sədri Aqil Əsgərovun rəhbərliyi ilə keçirilən iclasda Komitənin üzvləri – Tural Məmmədov, Zümrüd Əsgərova, Əli Qəniyev və Komitənin katibi Əkbər Cəfərli iştirak ediblər.İclasda Etika Komitəsinin qarşısında duran əsas məqsəd və vəzifələr, gələcək hədəflər və iş prosesi müzakirə edilib. Əlavə olaraq etik davranış pozuntuları zamanı baxılmalı olan işlərə dair reqlamentlər, 2024- cü ildə Komitənin qarşısında duran məsələlər və Komitənin iş planı, Komitəyə daxil olan şikayətlərə baxılması məsələləri müzakirə edilib.'
     },
     {
      id:3,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F192%2Fl2ZYUZKGlczr5HzR0zGk9uV6LruwFS-metaRkJfSU1HXzE3MDU1Nzk0NDY4NzMuanBn-.webp&w=1920&q=75',
      title:'AR Ədliyyə Nazirliyinin Ədliyyə Akademiyasında mediatorların imtahanı keçirilib.',
      content:"30 yanvar 2024-cü il tarixində mediasiya təlim qurumu olan Ədliyyə Akademiyasında ixtisaslaşmış ailə və əmək mediasiya təlimlərini başa vuran mediatorların yekun imtahanı keçirilmişdir.İmtahanda “Mediatorların hazırlığı və ixtisaslarının artırılması ilə bağlı Təlim Qaydası”nın təsdiq edilməsi barədə Nazirlər Kabinetinin Qərarına uyğun olaraq, İmtahan Komissiyası tərəfindən mediasiya ilə bağlı namizədlərin nəzəri və təcrübi bilikləri yoxlanılmışdır. İmtahan Komissiyasının sədri, Ədliyyə Akademiyasının prorektoru Elçin Xələfov, Komissiyanın üzvləri Mediasiya Şurası İdarə Heyətinin sədri Nadir Adilov, Komissiyanın müstəqil ekspert üzvü, Azərbaycan Respublikası Məhkəmə Hakimləri Assosiasiyaları İttifaqının nümayəndəsi, Vəkillər Kollegiyasının üzvü Kəramət Əliyev mediatorlara ailə və əmək münasibətlərindən irəli gələn mübahisələr üzrə mediasiya ilə bağlı istiqamətlər üzrə suallar verib və mediatorların bilik səviyyəsini qiymətləndiriblər."
    },
    {
      id:4,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F191%2Ff7vJL7VpfWCETlmo2AtOaW1d0RZk82-metaX2lubmV3c18wYmYwZTJmOWI5N2Y3Y2RjYzIyODk4NjMxX28uanBn-.webp&w=1920&q=75',
      title:'AR Ədliyyə Nazirliyinin Ədliyyə Akademiyasında mediatorların imtahanı keçirilib.',
      content:"30 yanvar 2024-cü il tarixində mediasiya təlim qurumu olan Ədliyyə Akademiyasında ixtisaslaşmış ailə və əmək mediasiya təlimlərini başa vuran mediatorların yekun imtahanı keçirilmişdir.İmtahanda “Mediatorların hazırlığı və ixtisaslarının artırılması ilə bağlı Təlim Qaydası”nın təsdiq edilməsi barədə Nazirlər Kabinetinin Qərarına uyğun olaraq, İmtahan Komissiyası tərəfindən mediasiya ilə bağlı namizədlərin nəzəri və təcrübi bilikləri yoxlanılmışdır. İmtahan Komissiyasının sədri, Ədliyyə Akademiyasının prorektoru Elçin Xələfov, Komissiyanın üzvləri Mediasiya Şurası İdarə Heyətinin sədri Nadir Adilov, Komissiyanın müstəqil ekspert üzvü, Azərbaycan Respublikası Məhkəmə Hakimləri Assosiasiyaları İttifaqının nümayəndəsi, Vəkillər Kollegiyasının üzvü Kəramət Əliyev mediatorlara ailə və əmək münasibətlərindən irəli gələn mübahisələr üzrə mediasiya ilə bağlı istiqamətlər üzrə suallar verib və mediatorların bilik səviyyəsini qiymətləndiriblər."
    },
    {
      id:5,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F190%2FpZIpLAJl8FwjoQr4nWmBsMHQ8uTurI-metaSU1HLTIwMjQwMTEwLVdBMDAxMi5qcGc%3D-.webp&w=1920&q=75',
      title:'AR Ədliyyə Nazirliyinin Ədliyyə Akademiyasında mediatorların imtahanı keçirilib.',
      content:"T30 yanvar 2024-cü il tarixində mediasiya təlim qurumu olan Ədliyyə Akademiyasında ixtisaslaşmış ailə və əmək mediasiya təlimlərini başa vuran mediatorların yekun imtahanı keçirilmişdir.İmtahanda “Mediatorların hazırlığı və ixtisaslarının artırılması ilə bağlı Təlim Qaydası”nın təsdiq edilməsi barədə Nazirlər Kabinetinin Qərarına uyğun olaraq, İmtahan Komissiyası tərəfindən mediasiya ilə bağlı namizədlərin nəzəri və təcrübi bilikləri yoxlanılmışdır. İmtahan Komissiyasının sədri, Ədliyyə Akademiyasının prorektoru Elçin Xələfov, Komissiyanın üzvləri Mediasiya Şurası İdarə Heyətinin sədri Nadir Adilov, Komissiyanın müstəqil ekspert üzvü, Azərbaycan Respublikası Məhkəmə Hakimləri Assosiasiyaları İttifaqının nümayəndəsi, Vəkillər Kollegiyasının üzvü Kəramət Əliyev mediatorlara ailə və əmək münasibətlərindən irəli gələn mübahisələr üzrə mediasiya ilə bağlı istiqamətlər üzrə suallar verib və mediatorların bilik səviyyəsini qiymətləndiriblər."
    },
    {
      id:6,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F185%2FgGqnu0hOZwMq2NQejE6aKYwQduBY41-metaRkJfSU1HXzE3MDM5NzMxOTQwODIuanBn-.webp&w=1080&q=75',
      title:'AR Ədliyyə Nazirliyinin Ədliyyə Akademiyasında mediatorların imtahanı keçirilib.',
      content:"30 yanvar 2024-cü il tarixində mediasiya təlim qurumu olan Ədliyyə Akademiyasında ixtisaslaşmış ailə və əmək mediasiya təlimlərini başa vuran mediatorların yekun imtahanı keçirilmişdir.İmtahanda “Mediatorların hazırlığı və ixtisaslarının artırılması ilə bağlı Təlim Qaydası”nın təsdiq edilməsi barədə Nazirlər Kabinetinin Qərarına uyğun olaraq, İmtahan Komissiyası tərəfindən mediasiya ilə bağlı namizədlərin nəzəri və təcrübi bilikləri yoxlanılmışdır. İmtahan Komissiyasının sədri, Ədliyyə Akademiyasının prorektoru Elçin Xələfov, Komissiyanın üzvləri Mediasiya Şurası İdarə Heyətinin sədri Nadir Adilov, Komissiyanın müstəqil ekspert üzvü, Azərbaycan Respublikası Məhkəmə Hakimləri Assosiasiyaları İttifaqının nümayəndəsi, Vəkillər Kollegiyasının üzvü Kəramət Əliyev mediatorlara ailə və əmək münasibətlərindən irəli gələn mübahisələr üzrə mediasiya ilə bağlı istiqamətlər üzrə suallar verib və mediatorların bilik səviyyəsini qiymətləndiriblər."
    },
    {
      id:7,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F184%2FcRd2Cruszd5LxYCB11ZzoRmeH7pLok-metaRkJfSU1HXzE3MDM5NDQ4MTM5MTYuanBn-.webp&w=1080&q=75',
      title:'AR Ədliyyə Nazirliyinin Ədliyyə Akademiyasında mediatorların imtahanı keçirilib.',
      content:"30 yanvar 2024-cü il tarixində mediasiya təlim qurumu olan Ədliyyə Akademiyasında ixtisaslaşmış ailə və əmək mediasiya təlimlərini başa vuran mediatorların yekun imtahanı keçirilmişdir.İmtahanda “Mediatorların hazırlığı və ixtisaslarının artırılması ilə bağlı Təlim Qaydası”nın təsdiq edilməsi barədə Nazirlər Kabinetinin Qərarına uyğun olaraq, İmtahan Komissiyası tərəfindən mediasiya ilə bağlı namizədlərin nəzəri və təcrübi bilikləri yoxlanılmışdır. İmtahan Komissiyasının sədri, Ədliyyə Akademiyasının prorektoru Elçin Xələfov, Komissiyanın üzvləri Mediasiya Şurası İdarə Heyətinin sədri Nadir Adilov, Komissiyanın müstəqil ekspert üzvü, Azərbaycan Respublikası Məhkəmə Hakimləri Assosiasiyaları İttifaqının nümayəndəsi, Vəkillər Kollegiyasının üzvü Kəramət Əliyev mediatorlara ailə və əmək münasibətlərindən irəli gələn mübahisələr üzrə mediasiya ilə bağlı istiqamətlər üzrə suallar verib və mediatorların bilik səviyyəsini qiymətləndiriblər."
    },
    {
      id:8,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F183%2FzM9q2XHydzeqsP0q1NdstwnloU0WgY-metaRkJfSU1HXzE3MDM5MjkxMTA3NzEuanBn-.webp&w=1080&q=75',
      title:'AR Ədliyyə Nazirliyinin Ədliyyə Akademiyasında mediatorların imtahanı keçirilib.',
      content:"30 yanvar 2024-cü il tarixində mediasiya təlim qurumu olan Ədliyyə Akademiyasında ixtisaslaşmış ailə və əmək mediasiya təlimlərini başa vuran mediatorların yekun imtahanı keçirilmişdir.İmtahanda “Mediatorların hazırlığı və ixtisaslarının artırılması ilə bağlı Təlim Qaydası”nın təsdiq edilməsi barədə Nazirlər Kabinetinin Qərarına uyğun olaraq, İmtahan Komissiyası tərəfindən mediasiya ilə bağlı namizədlərin nəzəri və təcrübi bilikləri yoxlanılmışdır. İmtahan Komissiyasının sədri, Ədliyyə Akademiyasının prorektoru Elçin Xələfov, Komissiyanın üzvləri Mediasiya Şurası İdarə Heyətinin sədri Nadir Adilov, Komissiyanın müstəqil ekspert üzvü, Azərbaycan Respublikası Məhkəmə Hakimləri Assosiasiyaları İttifaqının nümayəndəsi, Vəkillər Kollegiyasının üzvü Kəramət Əliyev mediatorlara ailə və əmək münasibətlərindən irəli gələn mübahisələr üzrə mediasiya ilə bağlı istiqamətlər üzrə suallar verib və mediatorların bilik səviyyəsini qiymətləndiriblər."
    },
    {
      id:9,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F182%2FtSWTqxB0yJi5zbgvyLUS7p7YD2Ah33-metaRkJfSU1HXzE3MDM5Mjg0MTgxNzguanBn-.webp&w=1080&q=75',
      title:'AR Ədliyyə Nazirliyinin Ədliyyə Akademiyasında mediatorların imtahanı keçirilib.',
      content:"30 yanvar 2024-cü il tarixində mediasiya təlim qurumu olan Ədliyyə Akademiyasında ixtisaslaşmış ailə və əmək mediasiya təlimlərini başa vuran mediatorların yekun imtahanı keçirilmişdir.İmtahanda “Mediatorların hazırlığı və ixtisaslarının artırılması ilə bağlı Təlim Qaydası”nın təsdiq edilməsi barədə Nazirlər Kabinetinin Qərarına uyğun olaraq, İmtahan Komissiyası tərəfindən mediasiya ilə bağlı namizədlərin nəzəri və təcrübi bilikləri yoxlanılmışdır. İmtahan Komissiyasının sədri, Ədliyyə Akademiyasının prorektoru Elçin Xələfov, Komissiyanın üzvləri Mediasiya Şurası İdarə Heyətinin sədri Nadir Adilov, Komissiyanın müstəqil ekspert üzvü, Azərbaycan Respublikası Məhkəmə Hakimləri Assosiasiyaları İttifaqının nümayəndəsi, Vəkillər Kollegiyasının üzvü Kəramət Əliyev mediatorlara ailə və əmək münasibətlərindən irəli gələn mübahisələr üzrə mediasiya ilə bağlı istiqamətlər üzrə suallar verib və mediatorların bilik səviyyəsini qiymətləndiriblər."
    },
    {
      id:10,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F181%2FU3xeca2yG9dHHxl2X1YDVcAaKKqRKA-metaRkJfSU1HXzE3MDM4NzgyMTA5MTQuanBn-.webp&w=1080&q=75',
      title:'AR Ədliyyə Nazirliyinin Ədliyyə Akademiyasında mediatorların imtahanı keçirilib.',
      content:"30 yanvar 2024-cü il tarixində mediasiya təlim qurumu olan Ədliyyə Akademiyasında ixtisaslaşmış ailə və əmək mediasiya təlimlərini başa vuran mediatorların yekun imtahanı keçirilmişdir.İmtahanda “Mediatorların hazırlığı və ixtisaslarının artırılması ilə bağlı Təlim Qaydası”nın təsdiq edilməsi barədə Nazirlər Kabinetinin Qərarına uyğun olaraq, İmtahan Komissiyası tərəfindən mediasiya ilə bağlı namizədlərin nəzəri və təcrübi bilikləri yoxlanılmışdır. İmtahan Komissiyasının sədri, Ədliyyə Akademiyasının prorektoru Elçin Xələfov, Komissiyanın üzvləri Mediasiya Şurası İdarə Heyətinin sədri Nadir Adilov, Komissiyanın müstəqil ekspert üzvü, Azərbaycan Respublikası Məhkəmə Hakimləri Assosiasiyaları İttifaqının nümayəndəsi, Vəkillər Kollegiyasının üzvü Kəramət Əliyev mediatorlara ailə və əmək münasibətlərindən irəli gələn mübahisələr üzrə mediasiya ilə bağlı istiqamətlər üzrə suallar verib və mediatorların bilik səviyyəsini qiymətləndiriblər."
    },
    {
      id:11,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F180%2FV2sUGyuG1fLMSdf2V91nkCvwGySfHd-metaRkJfSU1HXzE3MDM4MzQ2NDAzOTkuanBn-.webp&w=1080&q=75',
      title:'AR Ədliyyə Nazirliyinin Ədliyyə Akademiyasında mediatorların imtahanı keçirilib.',
      content:"30 yanvar 2024-cü il tarixində mediasiya təlim qurumu olan Ədliyyə Akademiyasında ixtisaslaşmış ailə və əmək mediasiya təlimlərini başa vuran mediatorların yekun imtahanı keçirilmişdir.İmtahanda “Mediatorların hazırlığı və ixtisaslarının artırılması ilə bağlı Təlim Qaydası”nın təsdiq edilməsi barədə Nazirlər Kabinetinin Qərarına uyğun olaraq, İmtahan Komissiyası tərəfindən mediasiya ilə bağlı namizədlərin nəzəri və təcrübi bilikləri yoxlanılmışdır. İmtahan Komissiyasının sədri, Ədliyyə Akademiyasının prorektoru Elçin Xələfov, Komissiyanın üzvləri Mediasiya Şurası İdarə Heyətinin sədri Nadir Adilov, Komissiyanın müstəqil ekspert üzvü, Azərbaycan Respublikası Məhkəmə Hakimləri Assosiasiyaları İttifaqının nümayəndəsi, Vəkillər Kollegiyasının üzvü Kəramət Əliyev mediatorlara ailə və əmək münasibətlərindən irəli gələn mübahisələr üzrə mediasiya ilə bağlı istiqamətlər üzrə suallar verib və mediatorların bilik səviyyəsini qiymətləndiriblər."
    },
    {
      id:12,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F179%2F67WLnpBPFt39xgNWQKPwEu12Y6DbZB-metaRkJfSU1HXzE3MDM2OTQ5ODMwNzUuanBn-.webp&w=1080&q=75',
      title:'AR Ədliyyə Nazirliyinin Ədliyyə Akademiyasında mediatorların imtahanı keçirilib.',
      content:"30 yanvar 2024-cü il tarixində mediasiya təlim qurumu olan Ədliyyə Akademiyasında ixtisaslaşmış ailə və əmək mediasiya təlimlərini başa vuran mediatorların yekun imtahanı keçirilmişdir.İmtahanda “Mediatorların hazırlığı və ixtisaslarının artırılması ilə bağlı Təlim Qaydası”nın təsdiq edilməsi barədə Nazirlər Kabinetinin Qərarına uyğun olaraq, İmtahan Komissiyası tərəfindən mediasiya ilə bağlı namizədlərin nəzəri və təcrübi bilikləri yoxlanılmışdır. İmtahan Komissiyasının sədri, Ədliyyə Akademiyasının prorektoru Elçin Xələfov, Komissiyanın üzvləri Mediasiya Şurası İdarə Heyətinin sədri Nadir Adilov, Komissiyanın müstəqil ekspert üzvü, Azərbaycan Respublikası Məhkəmə Hakimləri Assosiasiyaları İttifaqının nümayəndəsi, Vəkillər Kollegiyasının üzvü Kəramət Əliyev mediatorlara ailə və əmək münasibətlərindən irəli gələn mübahisələr üzrə mediasiya ilə bağlı istiqamətlər üzrə suallar verib və mediatorların bilik səviyyəsini qiymətləndiriblər."
    },
    {
      id:13,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F177%2F8YwGsYsxWI7brq09YVhD1KGAzbNh7E-metaRkJfSU1HXzE3MDM2OTQ0OTA5OTIuanBn-.webp&w=1080&q=75',
      title:'AR Ədliyyə Nazirliyinin Ədliyyə Akademiyasında mediatorların imtahanı keçirilib.',
      content:"30 yanvar 2024-cü il tarixində mediasiya təlim qurumu olan Ədliyyə Akademiyasında ixtisaslaşmış ailə və əmək mediasiya təlimlərini başa vuran mediatorların yekun imtahanı keçirilmişdir.İmtahanda “Mediatorların hazırlığı və ixtisaslarının artırılması ilə bağlı Təlim Qaydası”nın təsdiq edilməsi barədə Nazirlər Kabinetinin Qərarına uyğun olaraq, İmtahan Komissiyası tərəfindən mediasiya ilə bağlı namizədlərin nəzəri və təcrübi bilikləri yoxlanılmışdır. İmtahan Komissiyasının sədri, Ədliyyə Akademiyasının prorektoru Elçin Xələfov, Komissiyanın üzvləri Mediasiya Şurası İdarə Heyətinin sədri Nadir Adilov, Komissiyanın müstəqil ekspert üzvü, Azərbaycan Respublikası Məhkəmə Hakimləri Assosiasiyaları İttifaqının nümayəndəsi, Vəkillər Kollegiyasının üzvü Kəramət Əliyev mediatorlara ailə və əmək münasibətlərindən irəli gələn mübahisələr üzrə mediasiya ilə bağlı istiqamətlər üzrə suallar verib və mediatorların bilik səviyyəsini qiymətləndiriblər."
    },
    {
      id:14,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F176%2FeYjZpH52LjYcnDhQ8S05ca3aVtLPcc-metaRkJfSU1HXzE3MDM2OTQxODk1NjMuanBn-.webp&w=1080&q=75',
      title:'AR Ədliyyə Nazirliyinin Ədliyyə Akademiyasında mediatorların imtahanı keçirilib.',
      content:"30 yanvar 2024-cü il tarixində mediasiya təlim qurumu olan Ədliyyə Akademiyasında ixtisaslaşmış ailə və əmək mediasiya təlimlərini başa vuran mediatorların yekun imtahanı keçirilmişdir.İmtahanda “Mediatorların hazırlığı və ixtisaslarının artırılması ilə bağlı Təlim Qaydası”nın təsdiq edilməsi barədə Nazirlər Kabinetinin Qərarına uyğun olaraq, İmtahan Komissiyası tərəfindən mediasiya ilə bağlı namizədlərin nəzəri və təcrübi bilikləri yoxlanılmışdır. İmtahan Komissiyasının sədri, Ədliyyə Akademiyasının prorektoru Elçin Xələfov, Komissiyanın üzvləri Mediasiya Şurası İdarə Heyətinin sədri Nadir Adilov, Komissiyanın müstəqil ekspert üzvü, Azərbaycan Respublikası Məhkəmə Hakimləri Assosiasiyaları İttifaqının nümayəndəsi, Vəkillər Kollegiyasının üzvü Kəramət Əliyev mediatorlara ailə və əmək münasibətlərindən irəli gələn mübahisələr üzrə mediasiya ilə bağlı istiqamətlər üzrə suallar verib və mediatorların bilik səviyyəsini qiymətləndiriblər."
    },
    {
      id:15,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F174%2FqgNxeirUSwUBs9pDfkWayBKRqpuKI6-metaRkJfSU1HXzE3MDM2NTk4MTY4MjUuanBn-.webp&w=1080&q=75',
      title:'AR Ədliyyə Nazirliyinin Ədliyyə Akademiyasında mediatorların imtahanı keçirilib.',
      content:"30 yanvar 2024-cü il tarixində mediasiya təlim qurumu olan Ədliyyə Akademiyasında ixtisaslaşmış ailə və əmək mediasiya təlimlərini başa vuran mediatorların yekun imtahanı keçirilmişdir.İmtahanda “Mediatorların hazırlığı və ixtisaslarının artırılması ilə bağlı Təlim Qaydası”nın təsdiq edilməsi barədə Nazirlər Kabinetinin Qərarına uyğun olaraq, İmtahan Komissiyası tərəfindən mediasiya ilə bağlı namizədlərin nəzəri və təcrübi bilikləri yoxlanılmışdır. İmtahan Komissiyasının sədri, Ədliyyə Akademiyasının prorektoru Elçin Xələfov, Komissiyanın üzvləri Mediasiya Şurası İdarə Heyətinin sədri Nadir Adilov, Komissiyanın müstəqil ekspert üzvü, Azərbaycan Respublikası Məhkəmə Hakimləri Assosiasiyaları İttifaqının nümayəndəsi, Vəkillər Kollegiyasının üzvü Kəramət Əliyev mediatorlara ailə və əmək münasibətlərindən irəli gələn mübahisələr üzrə mediasiya ilə bağlı istiqamətlər üzrə suallar verib və mediatorların bilik səviyyəsini qiymətləndiriblər.."
    }   
  ];
const sameNews=[
    {
      id:1,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F7%2Fjay5g5DZBAB1OvaY03dtwlaYQZx1WI-metaSU1HXzg1NDkuanBn-.jpg&w=1920&q=75',
      content:"Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün..."
    },
    {
      id:2,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F8%2Fdjk24WeqTj0B9fDfNe8A6xA4STJhfz-metaMzU3NTQ4MDc2XzU4NDc4ODAwNzE5Mjg5NV83OTk1MjQ0NjI4NTc0MjQzNDY2X24uanBn-.jpg&w=1920&q=75',
      content:"Bu gün Mediasiya Şurası Etika Komitəsinin yeni tərkibli ilk iclası ..."
    },
    {
      id:3,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F9%2FXeDXskQpm8wHgxanBC7snvV9h14OZX-metaMzYzNzkzMjA5XzU4NDc3OTMyNzE5Mzc2M18xOTIxNTc4NDk0MDczOTI3NjU5X24uanBn-.jpg&w=1920&q=75',
      content:"Baş Prokurorluqda mediatorlar üçün maarifləndirici seminar təşkil.."
    },
    {
      id:4,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F10%2FZn6O4ENHjQSwdd416CwbeWjqZ54JKC-metaOWIyYTM3YWMtYWFkZi00OTdhLWFhODktZTFjNTYxNjg1NjZiLmpwZw%3D%3D-.jpg&w=1920&q=75',
      content:"Tezliklə e-mediasiya platforması istifadəyə veriləcək...."
    },
    {
      id:5,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F11%2FyFnI0Aji3U91XYKy9OIch1KRjIj0rY-metaMzY3OTgzNzM2XzU5NDU0Nzk4OTU1MDIzMF83Njc4ODkxOTM1MzI2MjI4NDEyX24uanBn-.jpg&w=1920&q=75',
      content:"Türkiyənin tanınmış hüquq professoru Mediasiya Şurasında ..."
    },
    {
      id:6,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F12%2Fk5mc0Wo9QtIXbXAK3MTrIFguCnw3MY-metaMzYzMzg4MDE2XzY5MDUzODAyOTc3ODk0NV8xOTIzOTU3ODQxODIwMjk1MDk2X24uanBn-.jpg&w=1920&q=75',
      content:"Beynəlxalq ekspertlərin iştirakı ilə Mediasiya proseslərinin..."
    },
    {
      id:7,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F21%2F734HbM7jiL7E4w4TbURD6MxU0iZSHD-metaMjAyMzA5MDlfMTAzNTIxLmpwZw%3D%3D-.jpg&w=1920&q=75',
      content:"Aynur Sabitova Fəxri mediator diplomu ilə təltif edilib...."
    },
    {
      id:8,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F24%2F8vuRKRogfFN1kIosQ3WBLDoVFUtAH2-metaMzc3NTYxMjg4XzgyNDQwNjU1MzAxOTA4OF84MTg5MzkzNjc3MjE2MjI1OTVfbi5qcGc%3D-.jpg&w=1920&q=75',
      content:"Ombudsman Səbinə Əliyeva Fəxri mediator diplomu ilə təltif edilib..."
    },
    {
      id:9,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F84%2FH9DmTe4AwblTadmLtn5p5wVX8lvRoy-metabm9hYS01WXJ5aVljRnZ0QS11bnNwbGFzaC5qcGc%3D-.webp&w=1920&q=75',
      content:"Kənd Təsərrüfatı Nazirliyi yanında Aqrar Kredit və İnkişaf Agentliyi və..."
    }
  ];

export const Detail:React.FC = () => {
    const {detailId} = useParams<Params>();
    console.log(detailId);
    const [open, setOpen] = useState(false)
  return (
    <div>
        
    {items.map((item) => (
      <div key={item.id}>
        {typeof detailId !== 'undefined' && item.id === parseInt(detailId, 10) && (
            
            <>
                <div className='md:container m-auto flex flex-col justify-center items-center'>
                    <div className='flex-col text-center my-10'>
                      {/* /------------------------------------------------------- */}
                        <div className='flex justify-center items-center sm:w-full '>
                        <img className='w-[50%] rounded-2xl'  src={item.image} alt="" />
                        </div>
                        {/* /---------------------------------------------------- */}
                        <div className='flex justify-around mt-2 text-gray-600 sm:w-full'>
                            <div className='w-36 h-10 flex justify-center items-center'>
                            <IoCalendarNumberOutline className='text-3xl'/> 
                            <h4 className='pl-2 font-medium'>1 gun əvvəl</h4>
                            </div>
                            <div className='w-36 h-10 flex justify-center items-center'>
                                <FaRegEye className='text-3xl'/>
                                <h4 className='pl-2 font-medium'>207</h4>
                            </div>
                        </div>
                        {/* /------------------------------------------------------------- */}
                        <div className='w-[60%] m-auto sm:w-full'>
                        <h1 className='font-bold text-3xl sm:w-full'>{item.title}</h1>
                        <p className='pt-6 text-lg text-gray-600 sm:w-full text-center'>{item.content}</p>
                        </div>
                        {/* /--------------------------------------------------------------- */}
                    </div>
                    {/* /---------------------------------------------------------- */}
                    <div className='w-[100%] h-[26rem]'>
                      
                      <CarouselProvider
                        naturalSlideWidth={150}
                        naturalSlideHeight={100}
                        totalSlides={3}
                        className='w-[50%] m-auto relative rounded-lg sm:w-full'
                      >
                        <Slider className='h-[25rem] w-full'>
                          <Slide index={0}><img className=' object-cover w-full h-full' src={Image01} alt="" /></Slide>
                          <Slide index={1}><img className=' object-cover w-full h-full' src={Image02} alt="" /></Slide>
                          <Slide index={2}><img className='object-cover w-full h-full' src={Image03} alt="" /></Slide>
                        </Slider>
                        <ButtonBack className='absolute top-[10rem] left-2 bg-slate-50 rounded-lg h-10'><ArrowLeftIcon className='text-gray-400' /></ButtonBack>
                        <ButtonNext className='absolute top-[10rem] right-2 bg-slate-50 rounded-lg h-10'><ArrowRightIcon className='text-gray-400' /></ButtonNext>
                      </CarouselProvider>
                      {/* /------------------------------------------------- */}
                      <div className='pt-6 w-[52%] m-auto sm:w-full md:w-full'>

                        <hr className='w-full' />
                        <div className=' flex justify-between items-center sm:justify-around  '>
                        <div className='bg-blue-600 rounded-lg p-1 text-white'>Dunya</div>
                        <div>
                        <IconButton><ThumbUpOffAltIcon/>3</IconButton>
                        <IconButton><ThumbDownOffAltIcon/>0</IconButton>
                        </div>
                        </div>
                        <hr className='w-full' />
                        </div>
                  </div>
                {/* /------------------------------------------------------- */}
                <div className='w-[52%] sm:w-full pt-16'>
                <h1 className='p-4 text-2xl'>Şərhlər (0)</h1>
                <Button className='w-full sm:w-full h-12' variant="outlined" onClick={()=>setOpen(true)}><IconButton ><AddCommentIcon/></IconButton></Button>
                <Drawer open={open} anchor='bottom' onClose={()=>setOpen(false)}>
                  <IconButton onClick={()=>setOpen(false)}><ClearIcon className='absolute right-2 top-2'/></IconButton>
                  <Box textAlign="center" sx={{display:'flex',flexDirection:'column',marginX:'5%', marginY:'2rem'}}>
                        <Typography variant='h6'sx={{color:'blue'}}>AR Ədliyyə Nazirliyinin Ədliyyə Akademiyasında mediatorların imtahanı keçirilib. məqaləsinə şərh yazmaq</Typography>
                        <TextField variant='outlined' label='Ad və Soyad' sx={{marginTop:'1rem'}}/>
                        <TextField variant='outlined' label='E-poct unvani'sx={{marginTop:'1rem'}}/>
                        <Textarea minRows={6} sx={{marginTop:'1rem'}} placeholder='Şərhiniz daxil edin' />
                        <Box sx={{display:'flex',justifyContent:'space-between', alignItems:'center',marginTop:'1rem'}}>
                          <Button sx={{border:'solid',borderColor:'gray',borderWidth:1}}>Ləğv et</Button>
                          <Button sx={{backgroundColor:'blue',color:'white',":hover":{color:'blue'}}}>Göndər</Button>
                        </Box>
                       
                  </Box>
                </Drawer>
                </div>
                {/* /------------------------------------------------------- */} 
                <Container maxWidth='lg'>
                  <Box sx={{flexGrow:1,paddingX:5}}>
                  <Grid container spacing={2} sx={{marginTop:0}}>
                    {
                      sameNews.map((item)=>(
                        <Grid item xs={12} sm={12} md={6} lg={4} key={item.id}>
                   <Card sx={{marginTop:'40px'}} className=' h-[100%]'>
                   <CardMedia
                   sx={{height:240}}
                   component="img"
                   alt='newsImage'
                   image={item.image}
                   />
                   <CardContent>
                     <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
                     <Typography variant='h6'>{item.content}</Typography>
                   </CardContent>
                   <CardActions>
                     <IconButton>
                       <ThumbUpIcon sx={{width:20}}/>
                     </IconButton>
                     <IconButton>
                       <ThumbDownAltIcon sx={{width:20}}/>
                     </IconButton>
                     <IconButton>
                       <RemoveRedEyeIcon sx={{width:20}}/>
                     </IconButton>
                   </CardActions>
                                  
                   </Card>
                      </Grid>
                      ))
                    }
                   

                  </Grid>
                  </Box>
                  </Container> 
                </div>
            </>
        )}
      </div>
    ))}
    
  </div>
    
  )
}
