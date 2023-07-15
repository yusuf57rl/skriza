<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     *  @Route("/home", name="home_alternate")
     *  @Route("/index", name="index_alternate")
     */
    public function index()
    {
        return $this->render('home.html.twig');
    }
}