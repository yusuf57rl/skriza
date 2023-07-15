<?php
declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ProfileController extends AbstractController
{
    /**
     * @Route("/my_profile", name="my_profile")
     *  @Route("/myprofile", name="my_profile_alternative_2")
     *  @Route("/meinprofil", name="my_profile_alternative_3")
     */
    public function index()
    {
        return $this->render('user-profile.html.twig');
    }
}